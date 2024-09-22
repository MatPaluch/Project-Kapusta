import styles from './ExpensesIncome.module.css';

function ExpensesIncome({ expenses, income }) {
  return (
    <div className={styles.bilansBox}>
      <div className={styles.labelBox}>
        <p className={styles.label}>Expenses:</p>
        <p className={styles.expensesLabel}>{expenses}</p>
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
        <p className={styles.label}>income:</p>
        <p className={styles.incomeLabel}>{income}</p>
      </div>
    </div>
  );
}

export default ExpensesIncome;
