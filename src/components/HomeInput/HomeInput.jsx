import styles from './HomeInput.module.css';
import Calendar from 'components/Calendar/Calendar';
import { useEffect, useState } from 'react';
import {
  handleExpenseSubmit,
  handleIncomeSubmit,
} from '../../redux/transaction/transactionActions';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchExpenseCategories,
  fetchIncomeCategories,
} from '../../redux/categories/categoriesActions';

export const HomeInput = () => {
  const dispatch = useDispatch();
  const categoryType = useSelector(state => state.categories.categoryType);
  const expenseCategories = useSelector(
    state => state.categories.expenseCategories
  );
  const incomeCategories = useSelector(
    state => state.categories.incomeCategories
  );

  const getTodayDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${mm}.${dd}.${yyyy}`;
  };

  const [formData, setFormData] = useState({
    description: '',
    category: '',
    amount: '',
    date: getTodayDate(),
  });
  const { loading } = useSelector(state => state.transaction);

  const descriptionHandler = e => {
    setFormData({ ...formData, description: e.target.value });
  };

  const categoryHandler = e => {
    setFormData({ ...formData, category: e.target.value });
  };

  const valueHandler = e => {
    setFormData({ ...formData, amount: e.target.value });
  };

  const dateHandler = date => {
    setFormData({ ...formData, date });
  };

  const handleClear = () => {
    setFormData({
      description: '',
      category: '',
      amount: '',
      date: getTodayDate(),
    });
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (categoryType === 'incomes') {
      dispatch(fetchIncomeCategories());
    } else if (categoryType === 'expenses') {
      dispatch(fetchExpenseCategories());
    }
  }, [dispatch, categoryType]);

  useEffect(() => {
    if (categoryType === 'incomes') {
      setCategories(incomeCategories);
    } else if (categoryType === 'expenses') {
      setCategories(expenseCategories);
    }
  }, [categoryType, incomeCategories, expenseCategories]);

  const onSubmit = e => {
    e.preventDefault();
    if (categoryType === 'expenses') {
      dispatch(handleExpenseSubmit(formData));
    } else {
      dispatch(handleIncomeSubmit(formData));
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.inputBox}>
        <Calendar onChange={dateHandler} />
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <input
              className={styles.productDescription}
              type="text"
              name="description"
              placeholder="Product description"
              value={formData.description}
              onChange={descriptionHandler}
            />
          </li>
          <li className={styles.listItem}>
            <select
              name="category"
              className={styles.productCategory}
              value={formData.category}
              onChange={categoryHandler}
            >
              <option value="" disabled hidden>
                Product category
              </option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </li>

          <li className={styles.listItem}>
            <input
              className={styles.productValue}
              type="number"
              name="amount"
              placeholder="0,00"
              value={formData.amount}
              onChange={valueHandler}
            />
          </li>
        </ul>
      </div>
      <div className={styles.inputButtonBox}>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Input'}
        </button>
        <button
          type="button"
          className={styles.clearButton}
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </form>
  );
};
