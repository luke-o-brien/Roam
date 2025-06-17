import { useState } from "react";
import styles from "./statusCard.module.scss";
import { motion } from "motion/react";

type LineStatus = {
  statusSeverity: number;
  statusSeverityDescription: string;
  reason: string;
};

type StatusCardProps = {
  name: string;
  id: string;
  lineStatuses: [LineStatus];
};

export const StatusCard: React.FC<StatusCardProps> = ({
  name,
  id,
  lineStatuses,
  setActiveLine,
  activeLine,
  mode
}) => {
  const [visibleDetails, setVisibleDetails] = useState(false);

  const statusData = lineStatuses.reduce<LineStatus[]>((acc, current) => {
    const duplicate = acc.some(
      (status) => status.statusSeverity === current.statusSeverity
    );
    if (!duplicate) acc.push(current);
    return acc;
  }, []);

  return (
    <div className={styles.statusCard}>
      <div
        className={styles.ColourIndicator}
        style={mode === 'Bus' ? { backgroundColor: `var(--bus)`} : { backgroundColor: `var(--${id})` }}
      ></div>
      <div className={styles.MainContent}>
        <div className={styles.TopContainer}>
          <div className={styles.CardInfoContainer}>
            <p>{name}</p>
            <div className={styles.StatusSeverityDescription}>
              {statusData.map((status, idx) => (
                <p key={idx} className={styles.LineStatusText}>
                  {status.statusSeverityDescription}
                </p>
              ))}
            </div>
          </div>
          <button
            className={styles.DetailsButton}
            onClick={() => {
              setVisibleDetails(activeLine === id ? false : true);
              setActiveLine(activeLine === id ? false : id);
            }}
          >
            {visibleDetails && activeLine === id ? `Hide` :
            `View Details`}
          </button>
        </div>

        <motion.div
          className={styles.ExpandableContent}
          layout
          initial={{ height: 0 }}
          animate={{
            height: visibleDetails && activeLine === id ? "auto" : 0,
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {lineStatuses.map((status, idx) => (
            <div key={idx} className={styles.DetailsText}>
              {status.reason.split(":").slice(1).join(":")}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
