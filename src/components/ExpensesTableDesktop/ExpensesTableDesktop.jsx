import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import styles from './ExpensesTableDesktop.module.css';
import icons from '../../images/icons.svg';
import { fetchUserData } from '../../redux/user/userActions';
import { deleteTransaction, fetchTransactions } from '../../redux/transactions/transactionsActions';

const ExpensesTableDesktop = ({ page }) => {
  const { expenses } = useSelector(state => state.transactions);
  const table = [
    { _id: 1 },
    { _id: 2 },
    { _id: 3 },
    { _id: 4 },
    { _id: 5 },
    { _id: 6 },
    { _id: 7 },
    { _id: 8 },
    { _id: 9 },
    { _id: 10 },
    { _id: 11 },
    { _id: 12 },
    { _id: 13 },
  ];

  expenses.forEach((newItem, index) => {
    if (index < table.length) {
      table[index] = newItem;
    } else {
      table.push(newItem);
    }
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions(page));
  }, [dispatch]);

  const deleteHandler = e => {
    const id = e.currentTarget.value;

    const resFromSetBalance = new Promise((resolve, reject) => {
      dispatch(deleteTransaction(id)).then(response => {
        if (response.error) {
          reject(response.payload.message);
        } else {
          resolve(response.payload.message);
        }
      });
    });
    resFromSetBalance.then(() => dispatch(fetchUserData()));

    toast.promise(
      resFromSetBalance,
      {
        pending: 'Please wait ...',
        success: {
          render({ data }) {
            return `${data}`;
          },
        },
        error: {
          render({ data }) {
            return `Error ${data}`;
          },
        },
      },
      { autoClose: 2000 }
    );
  };

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.headRow}>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {table.map(expense => (
          <tr key={expense._id} className={styles.row}>
            <td className={styles.date}>{expense.date}</td>
            <td className={styles.desc}>{expense.description}</td>
            <td className={styles.category}>{expense.category}</td>
            <td className={styles.amount}>
              {expense.amount && (
                <>
                  <span>- {expense.amount} PLN</span>
                  <button
                    type="button"
                    className={styles.buttonDelete}
                    onClick={deleteHandler}
                    value={expense._id}
                  >
                    <svg className={styles.deleteIcon}>
                      <use href={`${icons}#icon-delete`}></use>
                    </svg>
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ExpensesTableDesktop;
