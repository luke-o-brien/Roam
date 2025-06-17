import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { StatusCard } from "./components/statusCard";
import { TabMenu } from "./components/TabMenu/TabMenu";
import styles from "./ServiceStatus.module.scss";
import { useRef } from "react";
import { getServiceData } from "../../api/queries";
import { useBannerHeight } from "../../utils/hooks/useBannerHeight";

type LineStatus = {
  statusSeverity: number;
  statusSeverityDescription: string;
  reason?: string;
};

type Line = {
  id: string;
  name: string;
  modeName: string;
  lineStatuses: LineStatus[];
};

export const ServiceStatus: React.FC = () => {
  const cardsRef = useRef(null);

  const [mode, setMode] = useState("TFLLines");
  const [activeLine, setActiveLine] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isPending, isError } = useQuery({
    queryKey: ["getServiceData", mode],
    queryFn: () => getServiceData(mode),
  });

  const bottomBannerHeight = useBannerHeight(cardsRef, data);

  const filteredLines =
    data?.filter(
      (line) =>
        !line.lineStatuses.some((status) => status.statusSeverity === 10) &&
        (!searchTerm ||
          line.name.toLowerCase().includes(searchTerm.toLowerCase()))
    ) ?? [];

  return (
    <>
      <TabMenu setMode={setMode} mode={mode} />
      {mode === "Bus" && (
        <div className={styles.SearchField}>
          <label className={styles.SearchLable}>Search for a route</label>
          <input
            className={styles.SearchBar}
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </div>
      )}
      {isPending && <p>Loading...</p>}
      {isError && <p>Error fetching data</p>}
      {filteredLines?.length === 0 &&
        mode !== "Bus" &&
        !isPending &&
        !isError && (
          <div>
            {mode === "River" ? (
              <p>All River services are running with a good service</p>
            ) : (
              <p>Good service on all lines</p>
            )}
          </div>
        )}
      {(mode === "Bus" || filteredLines.length > 0) && (
        <div className={styles.CardContainer}>
          <div ref={cardsRef}>
            {filteredLines.map((line, idx) => (
              <StatusCard
                key={idx}
                name={line.name}
                id={line.id}
                lineStatuses={line.lineStatuses}
                setActiveLine={setActiveLine}
                activeLine={activeLine}
                mode={mode}
              />
            ))}
          </div>
          <div
            className={styles.ServiceMessage}
            style={{ height: `${bottomBannerHeight}px`, background: "#f8f8f8" }}
          >
            {!isPending ? (
              mode === "River" ? (
                <p>Good Service on all other river services</p>
              ) : mode === "Bus" ? (
                <p>Good Service on all other routes</p>
              ) : (
                <p>Good service on all other lines </p>
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </>
  );
};
