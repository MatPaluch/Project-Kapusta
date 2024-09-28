// import styles from './IncomeCategories.module.css';

import React, { useEffect } from 'react';
import { ReportCategory } from '../ReportCategory/ReportCategory';
import { fetchIncomeCategories } from '../../redux/categories/categoriesActions';
import { useDispatch, useSelector } from 'react-redux';

export const IncomeCategories = () => {
  const dispatch = useDispatch();
  const { incomeCategories, loading, error } = useSelector(
    state => state.categories
  );

  useEffect(() => {
    dispatch(fetchIncomeCategories());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {incomeCategories.map(category => (
        <ReportCategory
          key={category.id}
          name={category.name}
          total={category.total}
        />
      ))}
    </div>
  );
};
