import { Link } from 'react-router-dom';
import styles from './IncomeButtons.module.css';

function IncomeButtons() {
  return (
    <div className={styles.linkWrapper}>
      <div className={styles.linkBox}>
        <Link to="/" className={styles.linkButton}>
          Expenses
        </Link>
      </div>
      <div className={styles.income}>
        <Link to="/incomes" className={styles.linkButton}>
          Income
        </Link>
      </div>
    </div>
  );
}
export default IncomeButtons;
