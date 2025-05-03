
import styles from './header.module.scss'
import { useLocation } from 'react-router-dom';

type headerProps = {
  pageTitle: string
}

export const Header: React.FC<headerProps> = ({ pageTitle }) => {

  const pageConstants = {
    servicestatus: 'Service status'
  }
  const location = useLocation()
  const currentPage = location.pathname.split('/')[1].toLowerCase()
  return (
    <header className={styles.Header}>
      <p className={styles.PageName}>{pageConstants[currentPage]}</p>
      <button className={styles.MenuButton}>Menu</button>
    </header>
  );
}