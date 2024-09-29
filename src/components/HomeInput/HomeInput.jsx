import styles from './HomeInput.module.css';
import Calendar from 'components/Calendar/Calendar';
import { useState } from 'react';
import axios from 'axios';

function HomeInput() {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amaunt, setAmaunt] = useState('');

  // const exampleCategories = [
  //   {}
  // ]

  function descriptionHandler(e) {
    setDescription(e.target.value);
    console.log(description);
  }
  function categoryHandler(e) {
    setCategory(e.target.value);
    console.log(category);
  }
  function valueHandler(e) {
    setAmaunt(e.target.value);
    console.log(amaunt);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // wysłanie jsona do b danych
    const response = await axios.get(
      'https://project-kapusta-rest-api.vercel.app/transaction/expense'
    );
    console.log(response.data);
  }

  function handleClear(e) {
    setDescription('');
    setCategory('');
    setAmaunt('');
    // usunąć po ID z bazy danych
  }

  return (
    <form className={styles.form}>
      <div className={styles.inputBox}>
        <Calendar />
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <input
              className={styles.productDescription}
              type="text"
              name="description"
              placeholder="Product description"
              value={description}
              onChange={descriptionHandler}
            />
          </li>
          <li className={styles.listItem}>
            <select
              type="select"
              name="category"
              className={styles.productCategory}
              value={category}
              onChange={categoryHandler}
            >
              {/* renderować options po tablicy z backendu */}
              <option value="" disabled selected hidden>
                Product category
              </option>
              <option value="Transport">Transport</option>
              <option value="Product">Product</option>
              <option value="Health">Health</option>
              <option value="Alcohol">Alcohol</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Housing">Housing</option>
              <option value="Technique">Technique</option>
              <option value="Communal, communication">
                Communal, communication
              </option>
              <option value="Sports, hobbies">Sports, hobbies</option>
              <option value="Education">Education</option>
              <option value="Other">Other</option>
            </select>
          </li>
          <li className={styles.listItem}>
            <input
              className={styles.productValue}
              type="number"
              name="amaunt"
              placeholder="0,00"
              value={amaunt}
              onChange={valueHandler}
            />
          </li>
        </ul>
      </div>
      <div className={styles.inputButtonBox}>
        <button
          type="submit"
          className={styles.submitButton}
          onClick={handleSubmit}
        >
          Input
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
}

export default HomeInput;
