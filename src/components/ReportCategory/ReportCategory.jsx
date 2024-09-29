import React from 'react';
import styles from './ReportCategory.module.css';
import icons from '../../images/categoryIcons.svg';

export const ReportCategory = ({ name, total, onClick }) => {
  const getIconName = name => {
    let iconName;
    if (name === 'Other income') {
      iconName = 'ioth';
    } else {
      iconName = name.slice(0, 4).toLowerCase();
    }
    return iconName;
  };

  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryTotal}>{total} PLN</div>

      <div className={styles.categoryImage}>
        <div className={styles.categoryBackground}></div>
        <button className={styles.categoryButton} onClick={onClick}>
          <svg className={styles.categoryIcon}>
            <use href={`${icons}#icon-category-${getIconName(name)}`}></use>
          </svg>
        </button>
      </div>

      <div className={styles.categoryName}>{name}</div>
    </div>
  );
};
