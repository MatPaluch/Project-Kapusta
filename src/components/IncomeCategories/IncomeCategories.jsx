import styles from './IncomeCategories.module.css';

import React, { useEffect } from 'react';
import { ReportCategory } from '../ReportCategory/ReportCategory';
import { fetchIncomeCategories } from '../../redux/categories/categoriesActions';
import { useDispatch, useSelector } from 'react-redux';

export const IncomeCategories = () => {
  const dispatch = useDispatch();

  const { incomeCategories, loading, error } = useSelector(state => ({
    incomeCategories: state.categories.incomeCategories,
    loading: state.categories.loading,
    error: state.categories.error,
  }));

  useEffect(() => {
    dispatch(fetchIncomeCategories());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.categoriesContainer}>
      {incomeCategories.map(category => (
        <ReportCategory key={category} name={category} total={'total'} />
      ))}
    </div>
  );
};
