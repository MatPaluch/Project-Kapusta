import React, { useState, useEffect } from 'react';
import styles from './ReportsBar.module.css';
import { CurrentPeriod } from 'components/CurrentPeriod/CurrentPeriod';
import { BackToMain } from 'components/BackToMain/BackToMain';
import { BalanceForReports } from 'components/BalanceForReports/BalanceForReports';
import InputBalance from 'components/InputBalance/InputBalance';

export const ReportsBar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1280);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={styles.mainBarContainer}>
      <BackToMain />
      <CurrentPeriod />
      {isLargeScreen ? <InputBalance /> : <BalanceForReports />}
    </div>
  );
};
