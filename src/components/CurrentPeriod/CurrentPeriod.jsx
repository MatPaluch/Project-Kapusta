import React, { useState } from 'react';
import styles from './CurrentPeriod.module.css';
import icons from '../../images/icons.svg';

export const CurrentPeriod = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const formatDate = date => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  const handlePreviousMonth = () => {
    const prevMonth = new Date(
      currentDate.setMonth(currentDate.getMonth() - 1)
    );
    setCurrentDate(new Date(prevMonth));
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentDate.setMonth(currentDate.getMonth() + 1)
    );
    setCurrentDate(new Date(nextMonth));
  };

  return (
    <div className={styles.currentPeriodContainer}>
      <div>Current period:</div>

      <div className={styles.currentPeriod}>
        <button className={styles.arrowButton} onClick={handlePreviousMonth}>
          <svg className={styles.arrowIcon}>
            <use href={`${icons}#icon-arrow-left`}></use>
          </svg>
        </button>

        {formatDate(currentDate)}
        <button className={styles.arrowButton} onClick={handleNextMonth}>
          <svg className={styles.arrowIcon}>
            <use href={`${icons}#icon-arrow-right`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
