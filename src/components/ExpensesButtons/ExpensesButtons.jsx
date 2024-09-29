import { Link } from 'react-router-dom';
import styles from './ExpensesButton.module.css';

function ExpensesButton() {
  return (
    <div className={styles.linkWrapper}>
      <div className={styles.expenses}>
        <Link to="/" className={styles.linkButton}>
          Expenses
        </Link>
      </div>
      <div className={styles.linkBox}>
        <Link to="/incomes" className={styles.linkButton}>
          Incomes
        </Link>
      </div>
    </div>
  );
}
export default ExpensesButton;
