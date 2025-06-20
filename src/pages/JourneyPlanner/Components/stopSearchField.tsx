import { useState } from "react";
import styles from "./stopSearchField.module.scss";

export const StopSearchField = ({ setOrigin, label }) => {
  const [originInfo, setOriginInfo] = useState(null);
  const [originName, setOriginName] = useState("");
  const [isMatchesVisible, setIsMatchesVisible] = useState(false);

  async function getOrigin(e) {
    const value = e.target.value;
    setOriginName(value);

    const response = await fetch(
      `https://api.tfl.gov.uk/StopPoint/Search?query=${value}`
    );
    const data = await response.json();
    setOriginInfo(data);
    setIsMatchesVisible(true);
  }

  return (
    <div>
      <div className={styles.InputField}>
        <label>{label}</label>
        <input
          type="text"
          value={originName}
          onChange={getOrigin}
          onClick={() => {
            if (originInfo?.matches?.length > 0) {
              setIsMatchesVisible(true);
            }
          }}
        />
      </div>
      <div>
        {originInfo?.matches?.length > 0 &&
          isMatchesVisible &&
          originInfo?.matches
            .filter(
              (match) =>
                match.name.toLowerCase().includes(originName.toLowerCase()) &&
                !match.modes.includes("bus")
            )
            .map((origin) => (
              <div
                key={origin.id}
                onClick={() => {
                  setOrigin(origin.icsId);
                  setOriginName(origin.name);
                  setIsMatchesVisible(false);
                }}
              >
                {origin.name}
              </div>
            ))}
      </div>
    </div>
  );
};
