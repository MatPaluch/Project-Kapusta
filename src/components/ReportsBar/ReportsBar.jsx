import React from 'react';
import styles from './ReportsBar.module.css';

import { CurrentPeriod } from 'components/CurrentPeriod/CurrentPeriod';
import { BackToMain } from 'components/BackToMain/BackToMain';
import InputBalance from 'components/InputBalance/InputBalance';

export const ReportsBar = () => {
  return (
    <div className={styles.mainBarContainer}>
      <BackToMain />
      <div className={styles.subContainer}>
        <CurrentPeriod />
        <InputBalance />
      </div>
    </div>
  );
};
