import { Header } from '../Header/Header';
import styles from './Layout.module.css';
import icons from '../../images/icons.svg';
import { useSelector } from 'react-redux';

export const Layout = ({ children }) => {
  const { token } = useSelector(state => state.auth); // Pobieramy dane użytkownika z Reduxa

  return (
    <div className={styles.layoutContainer}>
      <Header />
      <div className={styles.layoutBackground}>
        {!token ? (
          <>
            {/* Elementy widoczne tylko na stronie logowania */}
            <div className={styles.kapustaBigContainer}>
              <svg className={styles.iconBigKapusta}>
                <use href={`${icons}#icon-kapusta-big`}></use>
              </svg>
            </div>
            <div className={styles.logo2Container}>
              <svg className={styles.iconLogo2}>
                <use href={`${icons}#icon-logo2`}></use>
              </svg>
            </div>
            <div className={styles.kapusta1Container}>
              <svg className={styles.iconSingleKapusta}>
                <use href={`${icons}#icon-single-kapusta-1`}></use>
              </svg>
            </div>
            <div className={styles.kapustaSmallContainer}>
              <svg className={styles.iconSmallKapusta}>
                <use href={`${icons}#icon-kapusta-small`}></use>
              </svg>
            </div>

            {/* Kontener dla formularza logowania */}
            <div className={styles.loginContainer}>{children}</div>

            <div className={styles.kapusta2Container}>
              <svg className={styles.iconSingleKapusta}>
                <use href={`${icons}#icon-single-kapusta-2`}></use>
              </svg>
            </div>
          </>
        ) : (
          <>
            {/* Elementy widoczne tylko po zalogowaniu */}
            <div className={styles.kapustaSmallContainerPrivate}>
              <svg className={styles.iconSmallKapusta}>
                <use href={`${icons}#icon-kapusta-small`}></use>
              </svg>
            </div>
            <div className={styles.kapustaBigContainerPrivate}>
              <svg className={styles.iconBigKapustaPrivate}>
                <use href={`${icons}#icon-kapusta-big`}></use>
              </svg>
            </div>
            {/* Zawartość strony głównej dla zalogowanych użytkowników */}
            <div className={styles.mainContentContainer}>{children}</div>
          </>
        )}
      </div>
    </div>
  );
};
