import styles from './BackToHome.module.css';
import icons from '../../images/icons.svg';

export const BackToHome = ({ home }) => {
  return (
    <div className={styles.arrowBox}>
      <button onClick={home} className={styles.arrowLink}>
        <svg className={styles.arrowIcon}>
          <use href={`${icons}#icon-big-arrow-left`}></use>
        </svg>
        <div className={styles.mobileHidden}>Main page</div>
      </button>
    </div>
  );
};
