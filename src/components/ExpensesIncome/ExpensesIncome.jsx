import { useSelector } from 'react-redux';
import styles from './ExpensesIncome.module.css';

function ExpensesIncome() {
  const expenses = useSelector(state => state.reports.expenseCategories.total);
  const income = useSelector(state => state.reports.incomeCategories.total);

  return (
    <div className={styles.bilansBox}>
      <div className={styles.labelBox}>
        <p className={styles.label}>Expenses:</p>
        <p className={styles.expensesLabel}>- {expenses ? expenses : 0} PLN.</p>
      </div>
      <svg
        className={styles.svg}
        width="2"
        height="70"
        viewBox="0 0 2 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 0V70" stroke="#E0E5EB" />
      </svg>
      <div className={styles.labelBox}>
        <p className={styles.label}>Income:</p>
        <p className={styles.incomeLabel}>+ {income ? income : 0} PLN.</p>
      </div>
    </div>
  );
}

export default ExpensesIncome;
