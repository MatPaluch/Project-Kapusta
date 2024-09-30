import styles from './ExpenseCategories.module.css';
import React, { useEffect } from 'react';
import { ReportCategory } from '../ReportCategory/ReportCategory';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReportExpenseCategories } from '../../redux/reports/reportsActions';
import {
  setSelectedCategory,
  setSelectedType,
} from '../../redux/reports/reportsSlice';

export const ExpenseCategories = () => {
  const dispatch = useDispatch();

  const expenseCategories = useSelector(
    state => state.reports.expenseCategories?.expensesData || {}
  );
  const loading = useSelector(state => state.categories.loading);
  const error = useSelector(state => state.categories.error);
  const selectedPeriod = useSelector(state => state.period.selectedPeriod);

  useEffect(() => {
    if (selectedPeriod) {
      dispatch(fetchReportExpenseCategories(selectedPeriod));
    }
  }, [dispatch, selectedPeriod]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const categoriesArray = Object.entries(expenseCategories);
  if (!categoriesArray.length > 0) {
    dispatch(setSelectedCategory(false));
  }

  return (
    <div className={styles.categoriesContainer}>
      {categoriesArray && categoriesArray.length > 0
        ? categoriesArray.map(([categoryName, categoryData]) => (
            <div className={styles.categoryBox}>
              <ReportCategory
                key={categoryName}
                name={categoryName}
                total={categoryData.total}
                onClick={() => {
                  dispatch(setSelectedCategory(categoryName));
                  dispatch(setSelectedType('expenses'));
                }}
              />
            </div>
          ))
        : 'No expenses available in selected period'}
    </div>
  );
};
