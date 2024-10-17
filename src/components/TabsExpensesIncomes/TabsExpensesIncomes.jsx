import styles from './TabsExpensesIncomes.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const TabsExpensesIncomes = ({ page }) => {
  const [expenses, setExpenses] = useState(page === 'expenses' ? true : false);
  const [incomes, setIncomes] = useState(page === 'incomes' ? true : false);

  return (
    <div className={styles.linkWrapper}>
      <Link
        to="/expenses"
        className={`${expenses ? styles.active : ''} ${styles.buttonsLink}`}
        onMouseEnter={() => {
          if (page === 'incomes') {
            setExpenses(true);
            setIncomes(false);
          }
        }}
        onMouseLeave={() => {
          if (page === 'incomes') {
            setExpenses(false);
            setIncomes(true);
          }
        }}
      >
        Expenses
      </Link>
      <Link
        to="/incomes"
        className={`${incomes ? styles.active : ''} ${styles.buttonsLink}`}
        onMouseEnter={() => {
          if (page === 'expenses') {
            setExpenses(false);
            setIncomes(true);
          }
        }}
        onMouseLeave={() => {
          if (page === 'expenses') {
            setExpenses(true);
            setIncomes(false);
          }
        }}
      >
        Incomes
      </Link>
    </div>
  );
};
export default TabsExpensesIncomes;
