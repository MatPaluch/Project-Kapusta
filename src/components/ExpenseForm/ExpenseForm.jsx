import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenseCategories } from '../../redux/transactions/transactionsActions';
import styles from './ExpenseForm.module.css';
import icons from '../../images/icons.svg';
import { setAmount } from '../../redux/transactions/transactionsSlice';

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.transactions.expensesCategories);
  const { description, category, amount } = useSelector(state => state.transactions.formElements);

  useEffect(() => {
    dispatch(fetchExpenseCategories());
  }, [dispatch]);

  const handleChangeAmount = e => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    if (value !== '0') {
      value = value.replace(/^0+/, ''); // Usuwa wiodące zera, jeśli wartość nie jest równa 0
    }
    if (value === '') {
      value = '0'; // W przypadku pustej wartości ustawiamy 0
    }
    dispatch(setAmount(value)); // <---Tutaj dispatch do  ustawiania wartości amount
  };

  const clearInputs = () => {
    dispatch(setAmount('0'));
  };

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
        <input
          name="amount"
          type="text"
          className={styles.amount}
          onChange={handleChangeAmount}
          pattern="\d*"
          inputMode="numeric"
          value={amount}
          placeholder="0"
          required
        />
        <div className={styles.calculatorWrapper}>
          <svg className={styles.calculatorSVG}>
            <use href={`${icons}#icon-calculator`}></use>
          </svg>
        </div>
      </div>
      <div className={styles.buttonsWrapper}>
        <button type="submit" className={styles.submit}>
          Input
        </button>
        <button type="reset" onClick={clearInputs} className={styles.clear}>
          Clear
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
