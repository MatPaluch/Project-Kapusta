import { useDispatch, useSelector } from 'react-redux';
import styles from './ExpensesTableMobile.module.css';
import icons from '../../images/icons.svg';
import React, { useEffect } from 'react';
import {
  deleteExpenseTransaction,
  fetchExpenseTransactions,
} from '../../redux/transactions/transactionsActions';

const ExpensesTableMobile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExpenseTransactions());
  }, [dispatch]);
  const { expenses, loading } = useSelector(state => state.transactions);

  const deleteHandler = e => {
    const id = e.currentTarget.value;
    console.log(id);
    dispatch(deleteExpenseTransaction(id));
  };
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tbody>
          {!loading ? (
            expenses.map(transaction => {
              return (
                <React.Fragment key={transaction._id}>
                  <tr key={transaction._id}>
                    <td colSpan={2} className={styles.desc}>
                      {transaction.description}
                    </td>
                    <td colSpan={2} rowSpan={2} className={styles.amount}>
                      <div className={styles.amountBox}>
                        - {transaction.amount} PLN
                        <button
                          type="button"
                          className={styles.deleteButton}
                          onClick={deleteHandler}
                          value={transaction._id}
                        >
                          <svg className={styles.iconDelete}>
                            <use href={`${icons}#icon-delete`}></use>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className={styles.trUnderline}>
                    <td className={styles.tdPadding}>{transaction.date}</td>
                    <td className={styles.tdPadding}>{transaction.category}</td>
                  </tr>
                </React.Fragment>
              );
            })
          ) : (
            <tr>
              {/* Tutaj dodać jakiś loader */}
              <td>Loading</td>
            </tr>
          )}
        </tbody> 
      </table>
    </div>
  );
};

export default ExpensesTableMobile;
