import { useDispatch, useSelector } from 'react-redux';
import styles from './ExpensesTableMobile.module.css';
import icons from '../../images/icons.svg';
import { useEffect } from 'react';
import { fetchExpenseTransactions } from '../../redux/transactions/transactionsActions';

const ExpensesTableMobile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExpenseTransactions());
  }, [dispatch]);
  const { expenses } = useSelector(state => state.transactions);
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tbody>
          {expenses.map(transaction => {
            return (
              <>
                <tr>
                  <td colSpan={2} className={styles.desc}>
                    {transaction.description}
                  </td>
                  <td colSpan={2} rowSpan={2} className={styles.amount}>
                    - {transaction.amount}
                    <svg className={styles.iconDelete}>
                      <use href={`${icons}#icon-delete`}></use>
                    </svg>
                  </td>
                </tr>
                <tr className={styles.trUnderline}>
                  <td className={styles.tdPadding}>{transaction.date}</td>
                  <td className={styles.tdPadding}>{transaction.category}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesTableMobile;
