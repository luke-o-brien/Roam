import { HomepageTile } from "../../Buttons/homepageTile/homepageTile"
import styles from "./ButtonGrid.module.scss"
export const ButtonGrid: React.FC = () => {
  return (
    <div className={styles.ButtonGrid}>
      <HomepageTile buttonText="Plan a Journey" icon="placeholder" />
      <HomepageTile buttonText="Service update" icon="placeholder" url="/serviceStatus"/>
      <HomepageTile buttonText="Live Departures" icon="placeholder" />
      <HomepageTile buttonText="My account" icon="placeholder" />
    </div>
  )
}