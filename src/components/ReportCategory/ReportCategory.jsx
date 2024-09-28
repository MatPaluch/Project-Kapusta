import React from 'react';
import styles from './ReportCategory.module.css';
import icons from '../../images/categoryIcons.svg';

export const ReportCategory = ({ name, total }) => {
  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryTotal}>{total}</div>

      <div className={styles.categoryImage}>
        <div className={styles.categoryBackground}></div>
        <button className={styles.categoryButton}>
          <svg className={styles.categoryIcon}>
            <use href={`${icons}#icon-category-products`}></use>
          </svg>
        </button>
      </div>

      <div className={styles.categoryName}>{name}</div>
    </div>
  );
};
