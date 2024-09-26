import { ToReportsButton } from 'components/ToReportsButton/ToReportsButton';
import styles from './Balans.module.css';
import InputBalance from 'components/InputBalance/InputBalance';

function Balans() {
  return (
    <div className={styles.balanceBox}>
      <ToReportsButton />
      <InputBalance />
    </div>
  );
}

export default Balans;
