import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import styles from './MultiForm.module.css';
import icons from '../../images/icons.svg';

import {
  fetchExpenseCategories,
  fetchTransactions,
  fetchIncomeCategories,
  handleExpenseSubmit,
} from '../../redux/transactions/transactionsActions';
import { setAmount, setCategory, setDescription } from '../../redux/transactions/transactionsSlice';
import { fetchUserData } from '../../redux/user/userActions';

import CustomSelect from './CustomSelect/CustomSelect';

const MultiForm = ({ page }) => {
  const isExpensesPage = page === 'expense' ? true : false;
  const dispatch = useDispatch();
  const date = useSelector(state => state.transactions.currentDate);
  const { description, category, amount } = useSelector(state => state.transactions.formElements);
  const categories = useSelector(state =>
    isExpensesPage ? state.transactions.expensesCategories : state.transactions.incomesCategories
  );

  const clearInputs = useCallback(() => {
    dispatch(setDescription(''));
    dispatch(setCategory(''));
    dispatch(setAmount(''));
  }, [dispatch]);

  useEffect(() => {
    isExpensesPage ? dispatch(fetchExpenseCategories()) : dispatch(fetchIncomeCategories());

    return () => {
      clearInputs(); // Funkcja czyszcząca wywoływana przy odmontowaniu komponentu
    };
  }, [dispatch, clearInputs, isExpensesPage]);

  const handleDescription = e => {
    dispatch(setDescription(e.currentTarget.value));
  };

  const handleSelect = e => {
    dispatch(setCategory(e.currentTarget.innerText));
  };

  const handleChangeAmount = e => {
    let value = e.currentTarget.value.replace(/[^0-9]/g, '');
    if (value !== '0') {
      value = value.replace(/^0+/, ''); // Usuwa wiodące zera, jeśli wartość nie jest równa 0
    }
    dispatch(setAmount(value)); // <---Tutaj dispatch do  ustawiania wartości amount
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (description === '') {
      toast.error('Description is required!');
      return;
    }
    if (category === '') {
      toast.error('Category is required!');
      return;
    }
    if (amount === '') {
      toast.error('Amout is required!');
      return;
    }

    const resFromSetBalance = new Promise((resolve, reject) => {
      const bodyTransaction = { description, category, amount, date };
      dispatch(handleExpenseSubmit({ bodyTransaction, page })).then(response => {
        if (response.error) {
          reject(response.payload.message);
        } else {
          resolve(response.payload.message);
        }
      });
    });

    resFromSetBalance.then(() => {
      dispatch(fetchUserData());
      dispatch(fetchTransactions(page));
    });

    toast.promise(
      resFromSetBalance,
      {
        pending: 'Please wait ...',
        success: 'Expense has been added to transactions.',
        error: {
          render({ data }) {
            return `Error ${data}`;
          },
        },
      },
      { autoClose: 2000 }
    );

    clearInputs();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmitForm}>
      <input
        name="description"
        type="text"
        className={styles.description}
        onChange={handleDescription}
        value={description}
        placeholder="Product description"
      />
      <CustomSelect
        name="category"
        placeholder="Product category"
        optionsArray={categories}
        selectedOption={category}
        onChange={handleSelect}
      />
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
export default MultiForm;
