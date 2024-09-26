import React from 'react';
import styles from './CurrentPeriod.module.css';
import icons from '../../images/icons.svg';

export const CurrentPeriod = () => {
  return (
    <div className={styles.currentPeriodContainer}>
      <div>Current period:</div>

      <div className={styles.currentPeriod}>
        <button className={styles.arrowButton}>
          <svg className={styles.arrowIcon}>
            <use href={`${icons}#icon-arrow-left`}></use>
          </svg>
        </button>
        Miesiąc Rok
        <button className={styles.arrowButton}>
          <svg className={styles.arrowIcon}>
            <use href={`${icons}#icon-arrow-right`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
