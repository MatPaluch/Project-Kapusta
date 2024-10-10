import { useDispatch, useSelector } from 'react-redux';
import { HomeInput } from '../HomeInput/HomeInput';
import styles from './ExpensesTable.module.css';
import {
  deleteTransaction,
  fetchExpenseTransactions,
} from '../../redux/transactions/transactionsActions';
import { useEffect } from 'react';

export const ExpensesTable = () => {
  const dispatch = useDispatch();
  const expenseTransactions = useSelector(state => state.transaction.expenses);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchExpenseTransactions());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const sortedTransactions = expenseTransactions
    ? [...expenseTransactions].sort((a, b) => new Date(b.date) - new Date(a.date))
    : [];
  const latestTransactions = sortedTransactions.slice(0, 15);

  const removeItem = id => {
    dispatch(deleteTransaction(id));
  };

  return (
    <div className={styles.box}>
      <HomeInput />
      <div className={styles.tableBox}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeader}>
              <th className={styles.tableHeaderItem}>Date</th>
              <th className={styles.tableHeaderItem}>Description</th>
              <th className={styles.tableHeaderItem}>Category</th>
              <th className={styles.tableHeaderItem}>Sum</th>
              <th className={styles.tableHeaderItem}>Actions</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {expenseTransactions.length > 0 ? (
              latestTransactions.map(val => {
                return (
                  <tr key={val._id} className={styles.tableRow}>
                    <td className={styles.tableItemDate}>{val.date}</td>
                    <td className={styles.tableItemDescription}>{val.description}</td>
                    <td className={styles.tableItemCategory}>{val.category}</td>
                    <td className={styles.tableItemSum}>{val.amount} PLN</td>
                    <td>
                      <button
                        className={styles.removeButton}
                        onClick={() => removeItem(val._id)}
                        aria-label="Remove item"
                      ></button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className={styles.tableItemDescription}>
                  No transactions available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
