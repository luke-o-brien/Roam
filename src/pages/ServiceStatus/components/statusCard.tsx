import styles from './statusCard.module.scss'

type StatusCardProps = {
  name: string
  id: string
}

export const StatusCard: React.FC<StatusCardProps> = ({ name, id }) => {
  console.log(name);
  return (
    <div className={styles.statusCard}>
      <div
        className={styles.ColourIndicator}
        style={{ backgroundColor: `var(--${id})` }}
      ></div>
      <p>{name}</p>
    </div>
  );
};