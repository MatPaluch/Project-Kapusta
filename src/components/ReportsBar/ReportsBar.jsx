import React from 'react';
import styles from './ReportsBar.module.css';
import Balans from 'components/Balans/Balans';
import { CurrentPeriod } from 'components/CurrentPeriod/CurrentPeriod';
import { BackToMain } from 'components/BackToMain/BackToMain';

export const ReportsBar = () => {
  const expenses = Number('1223');
  const income = Number('2137');
  const amaunt = Number(income - expenses);
  return (
    <div className={styles.mainBarContainer}>
      <BackToMain />
      <div className={styles.subContainer}>
        <CurrentPeriod />
        <Balans amaunt={amaunt} />
      </div>
    </div>
  );
};
