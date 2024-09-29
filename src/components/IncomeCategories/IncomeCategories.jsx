import styles from './IncomeCategories.module.css';
import React, { useEffect } from 'react';
import { ReportCategory } from '../ReportCategory/ReportCategory';

import { useDispatch, useSelector } from 'react-redux';
import { fetchReportIncomeCategories } from '../../redux/reports/reportsActions';

export const IncomeCategories = () => {
  const dispatch = useDispatch();

  const incomeCategories = useSelector(
    state => state.reports.incomeCategories?.incomesData || {}
  );
  const loading = useSelector(state => state.categories.loading);
  const error = useSelector(state => state.categories.error);
  const selectedPeriod = useSelector(state => state.period.selectedPeriod);

  useEffect(() => {
    if (selectedPeriod) {
      dispatch(fetchReportIncomeCategories(selectedPeriod));
    }
  }, [dispatch, selectedPeriod]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const categoriesArray = Object.entries(incomeCategories);

  return (
    <div className={styles.categoriesContainer}>
      {categoriesArray.map(([categoryName, categoryData]) => (
        <ReportCategory
          key={categoryName}
          name={categoryName}
          total={categoryData.total} // Pobranie total dla kategorii
        />
      ))}
    </div>
  );
};
