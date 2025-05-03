import styles from "./TabMenu.module.scss";
import { clsx } from 'clsx';

export const TabMenu = ({ setMode, mode }) => {

  
  return (
    <div className={styles.TabMenu}>
      <button
        className={clsx(
          mode === "TFLLines" ? styles.TabButtonActive : styles.TabButton
        )}
        onClick={() => setMode("TFLLines")}
      >
        TFL Lines
      </button>
      <button
        className={clsx(
          mode === "River" ? styles.TabButtonActive : styles.TabButton
        )}
        onClick={() => setMode("River")}
      >
        River
      </button>
      <button
        className={clsx(
          mode === "Bus" ? styles.TabButtonActive : styles.TabButton
        )}
        onClick={() => setMode("Bus")}
      >
        Busses
      </button>
    </div>
  );
};
