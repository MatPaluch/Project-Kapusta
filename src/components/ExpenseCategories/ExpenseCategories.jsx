import styles from './ExpenseCategories.module.css';

import React, { useEffect } from 'react';
import { ReportCategory } from '../ReportCategory/ReportCategory';
import { fetchExpenseCategories } from '../../redux/categories/categoriesActions';
import { useDispatch, useSelector } from 'react-redux';

export const ExpenseCategories = () => {
  const dispatch = useDispatch();

  const expenseCategories = useSelector(
    state => state.categories.expenseCategories
  );
  const loading = useSelector(state => state.categories.loading);
  const error = useSelector(state => state.categories.error);

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
