import { useSelector } from 'react-redux';
import styles from './BalanceForReports.module.css';

export const BalanceForReports = () => {
  const balance = useSelector(state => state.user.balance);
  return (
    <div className={styles.balanceWrapper}>
      <p className={styles.balanceText}>Balance:</p>
      <div className={styles.balanceInput}>
        <span>{balance}</span>
        <span>PLN</span>
      </div>
    </div>
  );
};
