import styles from "./homepageTile.module.scss";
import { Link } from "react-router-dom";
import { ReactNode } from "react";


type HomepageTileProps = {
  buttonText: string;
  icon: ReactNode;
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
        {icon}
      </button>
    </Link>
  );
};
