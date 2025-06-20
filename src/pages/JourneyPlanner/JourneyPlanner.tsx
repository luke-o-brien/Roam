import { useState } from "react";
import { StopSearchField } from "./Components/stopSearchField";
import styles from "./JourneyPlanner.module.scss"

export const JourneyPlanner = () => {
  const [origin, setOrigin] = useState("")
  const [Destination, setDestination] = useState("")


  return (
    <div>
      <div className={styles.Searchsection}>
        <StopSearchField setOrigin={setOrigin} label={"Origin"} />
        <StopSearchField setOrigin={setDestination} label={"Destination"} />
      </div>
      <div>{origin}</div>
    </div>
  );
};