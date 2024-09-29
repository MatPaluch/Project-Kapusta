import React, { useState } from 'react';
import styles from './ReportCategories.module.css';
import icons from '../../images/icons.svg';
import { IncomeCategories } from 'components/IncomeCategories/IncomeCategories';
import { ExpenseCategories } from 'components/ExpenseCategories/ExpenseCategories';
import { useSelector } from 'react-redux';

export const ReportCategories = () => {
  const selectedType = useSelector(state => state.reports.selectedType);
  const [category, setCategory] = useState(selectedType || 'expenses');

  const selectedMonth = useSelector(state => state.period.selectedPeriod);

  const toggleCategory = () => {
    setCategory(prevCategory =>
      prevCategory === 'expenses' ? 'incomes' : 'expenses'
    );
  };

  return (
    <div className={styles.reportContainer}>
      <div className={styles.categoriesBar}>
        <button onClick={toggleCategory} className={styles.arrowButton}>
          <svg className={styles.arrowIcon}>
            <use href={`${icons}#icon-arrow-left`}></use>
          </svg>
        </button>
        {category}
        <button onClick={toggleCategory} className={styles.arrowButton}>
          <svg className={styles.arrowIcon}>
            <use href={`${icons}#icon-arrow-right`}></use>
          </svg>
        </button>
      </div>
      <div className={styles.categoriesContainer}>
        {selectedMonth ? (
          category === 'expenses' ? (
            <ExpenseCategories selectedMonth={selectedMonth} />
          ) : (
            <IncomeCategories selectedMonth={selectedMonth} />
          )
        ) : (
          <p>Please select a month.</p>
        )}
      </div>
    </div>
  );
};
