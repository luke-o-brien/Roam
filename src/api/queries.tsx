import { apiModeVariables } from "../utils/constants";

export async function getServiceData(mode: string): Promise<Line[]> {
    const response = await fetch(
      `https://api.tfl.gov.uk/line/mode/${apiModeVariables[mode]}/status/`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }