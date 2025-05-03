import { useState } from "react";
import styles from "./statusCard.module.scss";

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
        style={{ backgroundColor: `var(--${id})` }}
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
            onClick={() => setVisibleDetails(!visibleDetails)}
          >
            View Details
          </button>
        </div>
        {visibleDetails && <div className={styles.ExpandableContent}>
          {lineStatuses.map((status, idx) => (
            <div key={idx} className={styles.DetailsText}>
              {status.reason.split(":").slice(1).join(":")}
            </div>
          ))}
        </div>}
      </div>
    </div>
  );
};
