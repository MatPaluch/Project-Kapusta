import React from 'react';
import styles from './ReportCategories.module.css';
import { ReportCategory } from '../ReportCategory/ReportCategory';
import icons from '../../images/icons.svg';

export const ReportCategories = () => {
  return (
    <div className={styles.reportContainer}>
      <div className={styles.categoriesBar}>
        <button className={styles.arrowButton}>
          <svg className={styles.arrowIcon}>
            <use href={`${icons}#icon-arrow-left`}></use>
          </svg>
        </button>
        Expenses
        <button className={styles.arrowButton}>
          <svg className={styles.arrowIcon}>
            <use href={`${icons}#icon-arrow-right`}></use>
          </svg>
        </button>
      </div>
      <div className={styles.categoriesContainer}>
        <ReportCategory />
        <ReportCategory />
        <ReportCategory />
      </div>
    </div>
  );
};
