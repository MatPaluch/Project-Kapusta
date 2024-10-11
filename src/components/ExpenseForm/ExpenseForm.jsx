import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenseCategories } from '../../redux/transactions/transactionsActions';
import styles from './ExpenseForm.module.css';
import icons from '../../images/icons.svg';

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.transactions.expensesCategories);
  useEffect(() => {
    dispatch(fetchExpenseCategories());
  }, [dispatch]);

  return (
    <form className={styles.form}>
      <input
        name="description"
        type="text"
        className={styles.description}
        placeholder="Product description"
        required
      />
      <select
        name="category"
        className={styles.categorySelect}
        placeholder="Product category"
        required
      >
        {categories ? (
          categories.map(category => (
            <option value={category} className={styles.categoryOption}>
              {category}
            </option>
          ))
        ) : (
          <option className={styles.categoryLoading}>Loading...</option>
        )}
      </select>
      <div className={styles.amountWrapper}>
        <input name="amount" type="number" className={styles.amount} required />
        <div className={styles.calculatorWrapper}>
          <svg className={styles.calculatorSVG}>
            <use href={`${icons}#icon-calculator`}></use>
          </svg>
        </div>
      </div>

      <button type="submit" className={styles.submit}>
        Input
      </button>
      <button type="reset" className={styles.clear}>
        Clear
      </button>
    </form>
  );
};
export default ExpenseForm;
