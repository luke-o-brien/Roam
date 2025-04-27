import { HomepageTile } from "../../Buttons/homepageTile/homepageTile"
import styles from "./ButtonGrid.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMap, faUser } from "@fortawesome/free-regular-svg-icons";
import { faTrain } from "@fortawesome/free-solid-svg-icons";


export const ButtonGrid: React.FC = () => {
  return (
    <div className={styles.ButtonGrid}>
      <HomepageTile
        buttonText="Plan a Journey"
        icon={<FontAwesomeIcon icon={faMap} className={styles.Icon} />}
        url="/planjourney"
      />
      <HomepageTile
        buttonText="Service update"
        icon={<FontAwesomeIcon icon={faBell} className={styles.Icon} />}
        url="/serviceStatus"
      />
      <HomepageTile
        buttonText="Live Departures"
        icon={<FontAwesomeIcon icon={faTrain} className={styles.Icon} />}
        url="/departures"
      />
      <HomepageTile
        buttonText="My account"
        icon={<FontAwesomeIcon icon={faUser} className={styles.Icon} />}
        url="/account"
      />
    </div>
  );
}