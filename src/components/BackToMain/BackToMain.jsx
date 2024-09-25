import React from 'react';
import styles from './BackToMain.module.css';
import icons from '../../images/icons.svg';
import { Link } from 'react-router-dom';

export const BackToMain = () => {
  return (
    <div className={styles.returnContainer}>
      <Link to="/">
        <button className={styles.arrowButton}>
          <svg className={styles.arrowIcon}>
            <use href={`${icons}#icon-big-arrow-left`}></use>
          </svg>
        </button>
        <div className={styles.mobileHidden}>Main page</div>
      </Link>
    </div>
  );
};
