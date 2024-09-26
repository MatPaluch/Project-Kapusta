import styles from './BackToMain.module.css';
import icons from '../../images/icons.svg';
import { Link } from 'react-router-dom';

export const BackToMain = () => {
  return (
    <Link to="/" className={styles.returnContainer}>
      <div className={styles.arrowButton}>
        <svg className={styles.arrowIcon}>
          <use href={`${icons}#icon-big-arrow-left`}></use>
        </svg>
      </div>
      <div className={styles.mobileHidden}>Main page</div>
    </Link>
  );
};
