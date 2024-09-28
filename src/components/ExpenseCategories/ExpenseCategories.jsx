import styles from './ExpenseCategories.module.css';

import React, { useEffect } from 'react';
import { ReportCategory } from '../ReportCategory/ReportCategory';
import { fetchExpenseCategories } from '../../redux/categories/categoriesActions';
import { useDispatch, useSelector } from 'react-redux';

export const ExpenseCategories = () => {
  const dispatch = useDispatch();

  const { expenseCategories, loading, error } = useSelector(state => ({
    expenseCategories: state.categories.expenseCategories,
    loading: state.categories.loading,
    error: state.categories.error,
  }));

  useEffect(() => {
    dispatch(fetchExpenseCategories());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.categoriesContainer}>
      {expenseCategories.map(category => (
        <ReportCategory key={category} name={category} total={'total'} />
      ))}
    </div>
  );
};