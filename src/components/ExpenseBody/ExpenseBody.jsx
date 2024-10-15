import styles from './ExpenseBody.module.css';
import Calendar from 'components/Calendar/Calendar';
import ExpenseForm from 'components/ExpenseForm/ExpenseForm';
import ExpensesTableDesktop from 'components/ExpensesTableDesktop/ExpensesTableDesktop';

const ExpenseBody = () => {
  return (
    <div className={styles.expenseBody}>
      <div className={styles.inputs}>
        <Calendar />
        <ExpenseForm />
      </div>
      <div>
        <ExpensesTableDesktop />
      </div>
    </div>
  );
};
export default ExpenseBody;
