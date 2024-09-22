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
            <use href={`${icons}#icon-logo2`} width="306px"></use>
          </svg>

          <div className={styles.kapusta1Container}>
            <svg className={styles.iconSingleKapusta}>
              <use href={`${icons}#icon-single-kapusta-1`}></use>
            </svg>
          </div>
          <div className={styles.kapustaBigContainer}>
            <svg className={styles.iconBigKapusta}>
              <use href={`${icons}#icon-kapusta-big`}></use>
            </svg>
          </div>
          <div class={styles.loginContainer}>{children}</div>
          <div className={styles.kapusta2Container}>
            <svg className={styles.iconSingleKapusta}>
              <use href={`${icons}#icon-single-kapusta-2`}></use>
            </svg>
          </div>
        </div>
      ) : (
        <div className={styles.layoutBackground}> {children}</div>
      )}
    </div>
  );
};
