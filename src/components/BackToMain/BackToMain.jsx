import styles from './BackToMain.module.css';
import icons from '../../images/icons.svg';
import { Link } from 'react-router-dom';

export const BackToMain = () => {
  return (
    <>
      <div className={styles.arrowBox}>
        <Link to="/" className={styles.arrowLink}>
          <svg className={styles.arrowIcon}>
            <use href={`${icons}#icon-big-arrow-left`}></use>
          </svg>
          <div className={styles.mobileHidden}>Main page</div>
        </Link>
      </div>
    </>
  );
};
