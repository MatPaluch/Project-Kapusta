import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenseTransactions } from '../../redux/transactions/transactionsActions';
import styles from './ExpensesTableDesktop.module.css';
import icons from '../../images/icons.svg';
const ExpensesTableDesktop = () => {
  const { expenses } = useSelector(state => state.transactions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpenseTransactions());
  }, [dispatch]);

  return (
    <table>
      <thead className={styles.thead}>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(expense => (
          <tr key={expense._id}>
            <td>{expense.date}</td>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>
              {expense.amount}
              <svg className={styles.deleteIcon}>
                <use href={`${icons}#icon-delete`}></use>
              </svg>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ExpensesTableDesktop;
