import styles from './ExpensesButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { IncomesTable } from 'components/IncomesTable/IncomesTable';
import { ExpensesTable } from 'components/ExpensesTable/ExpensesTable';
import { setCategoryType } from '../../redux/categories/categoriesSlice';

function ExpensesButton() {
  const dispatch = useDispatch();
  const categoryType = useSelector(state => state.categories.categoryType);

  const toggleCategory = () => {
    const newCategoryType =
      categoryType === 'expenses' ? 'incomes' : 'expenses';
    dispatch(setCategoryType(newCategoryType)); // Zmieniamy stan w Reduxie
  };

  return (
    <>
      <div className={styles.linkWrapper}>
        <div className={styles.expenses}>
          <button className={styles.linkButton} onClick={toggleCategory}>
            Expenses
          </button>
        </div>
        <div className={styles.linkBox}>
          <button className={styles.linkButton} onClick={toggleCategory}>
            Income
          </button>
        </div>
      </div>
      {categoryType === 'expenses' ? <ExpensesTable /> : <IncomesTable />}
    </>
  );
}
export default ExpensesButton;
