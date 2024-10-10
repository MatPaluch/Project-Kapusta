import styles from './MobilePage.module.css';
// import Calendar from 'components/Calendar/Calendar';
import { useState } from 'react';
import { handleSubmit } from '../../redux/transactions/transactionsActions';
import { useDispatch, useSelector } from 'react-redux';

function MobilePage() {
  const dispatch = useDispatch();

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

  //   const dateHandler = date => {
  //     setFormData({ ...formData, date });
  //   };

  const handleClear = () => {
    setFormData({
      description: '',
      category: '',
      amount: '',
      date: getTodayDate(),
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(handleSubmit(formData));
  };

  return (
    <div className={styles.mobileBox}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.inputBox}>
          {/* <Calendar className={styles.calendar} onChange={dateHandler} /> */}
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
                <option value="Transport">Transport</option>
                <option value="Product">Product</option>
                <option value="Health">Health</option>
                <option value="Alcohol">Alcohol</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Housing">Housing</option>
                <option value="Technique">Technique</option>
                <option value="Communal, Communication">Communal, communication</option>
                <option value="Sports, Hobbies">Sports, Hobbies</option>
                <option value="Education">Education</option>
                <option value="Other">Other</option>
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
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Loading...' : 'Input'}
          </button>
          <button type="button" className={styles.clearButton} onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default MobilePage;
