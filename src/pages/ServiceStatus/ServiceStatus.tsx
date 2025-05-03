import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { StatusCard } from "./components/statusCard";

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
  const apiVariables = {
    TFLLines: "tube,overground,dlr,tram,elizabeth-line",
    River: "river-bus",
    Bus: "bus",
  };

  const [mode] = useState(apiVariables.TFLLines);

  async function getServiceData(mode: string): Promise<Line[]> {
    const response = await fetch(
      `https://api.tfl.gov.uk/line/mode/${mode}/status/`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }

  const { data, isPending, isError } = useQuery({
    queryKey: ["getServiceData", mode],
    queryFn: () => getServiceData(mode),
  });

  const filteredLines =
    data?.filter((line) =>
      !line.lineStatuses.some((status) => status.statusSeverity === 10)
    ) ?? [];

  console.log(filteredLines)
  return (
    <>
      {isPending && <p>Loading...</p>}
      {isError && <p>Error fetching data</p>}
      {filteredLines?.length === 0 && <p>Good service on all lines</p>}
      {filteredLines.length > 0 && (
        <>
          <p>Service status page</p>
          {filteredLines.map((line, idx) => (
            <StatusCard key={idx} name={line.name} id={line.id} lineStatuses={line.lineStatuses} />
          ))}
        </>
      )}
    </>
  );
};
