import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import styles from './ExpensesTableMobile.module.css';
import icons from '../../images/icons.svg';

import { deleteTransaction, fetchTransactions } from '../../redux/transactions/transactionsActions';
import { fetchUserData } from '../../redux/user/userActions';

import TableLoader from 'components/TableLoader/TableLoader';

const ExpensesTableMobile = ({ page }) => {
  const dispatch = useDispatch();
  const transactions = useSelector(state =>
    page === 'expense' ? state.transactions.expenses : state.transactions.incomes
  );
  const loading = useSelector(state => state.transactions.loading);

  useEffect(() => {
    dispatch(fetchTransactions(page));
  }, [dispatch]);

  const deleteHandler = e => {
    const id = e.currentTarget.value;

    const resFromSetBalance = new Promise((resolve, reject) => {
      dispatch(deleteTransaction(id)).then(response => {
        dispatch(fetchUserData());

        if (response.error) {
          reject(response.payload.message);
        } else {
          resolve(response.payload.message);
        }
      });
    });

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
    <div className={styles.container}>
      {!loading ? (
        <table className={styles.table}>
          <tbody>
            {transactions.map(transaction => {
              return (
                <React.Fragment key={transaction._id}>
                  <tr key={transaction._id}>
                    <td colSpan={2} className={styles.desc}>
                      {transaction.description}
                    </td>
                    <td colSpan={2} rowSpan={2} className={styles.amount}>
                      <span>- {transaction.amount} PLN</span>
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
                    </td>
                  </tr>
                  <tr className={styles.trUnderline}>
                    <td className={styles.tdPadding}>{transaction.date}</td>
                    <td className={styles.tdPadding}>{transaction.category}</td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      ) : (
        <TableLoader />
      )}
    </div>
  );
};

export default ExpensesTableMobile;
