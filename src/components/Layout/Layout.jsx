import { Header } from '../Header/Header';
import styles from './Layout.module.css';
import icons from '../../images/icons.svg';
import { useSelector } from 'react-redux';

export const Layout = ({ children }) => {
  const { token } = useSelector(state => state.auth); // Pobieramy dane użytkownika z Reduxa

  return (
    <div>
      <Header />

      {!token ? (
        <div className={styles.layoutBackground}>
          <svg className={styles.iconLogo2}>
            <use href={`${icons}#icon-logo2`}></use>
          </svg>
          {children}
        </div>
      ) : (
        <div className={styles.layoutBackground}> {children}</div>
      )}
    </div>
  );
};
