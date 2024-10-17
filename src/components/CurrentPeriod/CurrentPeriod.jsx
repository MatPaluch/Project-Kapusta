import styles from './CurrentPeriod.module.css';
import React from 'react';
import icons from '../../images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { nextMonth, previousMonth } from '../../redux/period/periodSlice';

export const CurrentPeriod = () => {
  const dispatch = useDispatch();
  const currentDateString = useSelector(state => state.period.selectedPeriod);
  const currentDate = new Date(currentDateString);

  const formatDate = date => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  return (
    <div className={styles.currentPeriodContainer}>
      <div>Current period:</div>

      <div className={styles.currentPeriod}>
        <button className={styles.arrowButton} onClick={() => dispatch(previousMonth())}>
          <svg className={styles.arrowIcon}>
            <use href={`${icons}#icon-arrow-left`}></use>
          </svg>
        </button>

        {formatDate(currentDate)}
        <button className={styles.arrowButton} onClick={() => dispatch(nextMonth())}>
          <svg className={styles.arrowIcon}>
            <use href={`${icons}#icon-arrow-right`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
