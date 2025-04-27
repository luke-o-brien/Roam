import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const ServiceStatus: React.FC = () => {
  const apiVariables = {
    TFLLines: "tube,overground,dlr,tram,elizabeth-line",
    River: "river-bus",
    Bus: "bus",
  };

  const [mode, setMode] = useState(apiVariables.TFLLines);

  async function getServiceData(mode: string) {
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

  // only filter if data exists
  const filteredLines = data?.filter(
    (line) => !line.lineStatuses.some((status) => status.statusSeverity === 10)
  );

  return (
    <>
      {isPending && <p>Loading...</p>}
      {isError && <p>Error fetching data</p>}
      {filteredLines?.length === 0 && <p>Good service on all lines</p>}
      {filteredLines?.length > 0 && (
        <>
          <p>Service status page</p>
          {filteredLines.map((line) => (
            <p key={line.id}>{line.name}</p>
          ))}
        </>
      )}
    </>
  );
};
