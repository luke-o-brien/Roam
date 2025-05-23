import { ButtonGrid } from "../../components/HomeComponents/ButtonGrid/ButtonGrid";
import styles from "./home.module.scss"

export const Home = () => {
  return (
    <>
      <h1>Roam</h1>
      <h1 className={styles.TitleCity} data-testid="city-name">
        London
      </h1>
      <ButtonGrid />
    </>
  );
};
