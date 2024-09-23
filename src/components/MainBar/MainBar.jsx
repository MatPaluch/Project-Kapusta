import React from 'react';
import styles from './MainBar.module.css';
import Balans from 'components/Balans/Balans';
import { CurrentPeriod } from 'components/CurrentPeriod/CurrentPeriod';

export const MainBar = () => {
  const expenses = Number('1223');
  const income = Number('2137');
  const amaunt = Number(income - expenses);
  return (
    <div className={styles.mainBarContainer}>
      <CurrentPeriod />
      <Balans amaunt={amaunt} />
    </div>
  );
};
