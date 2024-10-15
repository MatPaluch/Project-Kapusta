import styles from './ExpenseBody.module.css';
import Calendar from 'components/Calendar/Calendar';
import MultiForm from 'components/MultiForm/MultiForm';
import ExpensesTableDesktop from 'components/ExpensesTableDesktop/ExpensesTableDesktop';

const ExpenseBody = () => {
  return (
    <div className={styles.expenseBody}>
      <div className={styles.inputs}>
        <Calendar />
        <MultiForm page={'expense'} />
      </div>
      <div>
        <ExpensesTableDesktop page={'expense'} />
      </div>
    </div>
  );
};
export default ExpenseBody;
