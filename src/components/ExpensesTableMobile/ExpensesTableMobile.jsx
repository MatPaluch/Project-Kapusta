import { useDispatch, useSelector } from 'react-redux';
import styles from './ExpensesTableMobile.module.css';
import icons from '../../images/icons.svg';
import React, { useEffect } from 'react';
import {
  deleteExpenseTransaction,
  fetchExpenseTransactions,
} from '../../redux/transactions/transactionsActions';
import { fetchUserData } from '../../redux/user/userActions';
import { toast } from 'react-toastify';
import TableLoader from 'components/TableLoader/TableLoader';

const ExpensesTableMobile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExpenseTransactions());
  }, [dispatch]);
  const { expenses, loading } = useSelector(state => state.transactions);

  const deleteHandler = e => {
    const id = e.currentTarget.value;

    const resFromSetBalance = new Promise((resolve, reject) => {
      dispatch(deleteExpenseTransaction(id)).then(response => {
        dispatch(fetchUserData());
        console.log(response);
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
            <TableLoader/>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesTableMobile;
