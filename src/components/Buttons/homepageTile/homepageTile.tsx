import styles from "./homepageTile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

type HomepageTileProps = {
  buttonText: string;
  icon: string;
  url?: string;
};

export const HomepageTile: React.FC<HomepageTileProps> = ({
  buttonText,
  icon,
  url,
}) => {
  return (
    <Link to={url} className={styles.Link}>
      <button className={styles.ButtonContainer}>
        <p className={styles.ButtonText}>{buttonText}</p>
        {icon && <FontAwesomeIcon icon={faEnvelope} className={styles.Icon} />}
      </button>
    </Link>
  );
};
