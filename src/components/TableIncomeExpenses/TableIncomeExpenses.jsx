import { HomeInput } from '../HomeInput/HomeInput';
import styles from './TableIncomeExpenses.module.css';
// import React, { useState } from 'react';

const exampleData = [
  {
    date: '20.09.2024',
    description: 'this is description1',
    category: 'Salary',
    sum: 1234,
  },
  {
    date: '21.09.2024',
    description: 'this is description2',
    category: 'Transport',
    sum: 2137,
  },
  {
    date: '22.09.2024',
    description: 'this is description3',
    category: 'Education',
    sum: 666,
  },
];

function TableIncomeExpenses() {
  // const [style, setStyle] = useState('home');

  // function backToTransaction() {
  //   console.log('Wracamy do tranzakcji');
  //   if (style !== 'home') setStyle('home');
  //   else setStyle('transaction');
  //   console.log(style);
  // }

  function removeItem() {
    // ta funkcja ma usuwać przedmioty po ID
  }

  return (
    <div className={styles.box}>
      <HomeInput />
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={styles.tableHeaderItem}>Date</th>
            <th className={styles.tableHeaderItem}>Description</th>
            <th className={styles.tableHeaderItem}>Category</th>
            <th className={styles.tableHeaderItem}>Sum</th>
            <th className={styles.tableHeaderItem}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exampleData.map((val, key) => {
            return (
              <tr key={key} className={styles.tableRow}>
                <td className={styles.tableItemDate}>{val.date}</td>
                <td className={styles.tableItemDescription}>
                  {val.description}
                </td>
                <td className={styles.tableItemCategory}>{val.category}</td>
                <td className={styles.tableItemSum}>{val.sum}</td>
                <td>
                  <button
                    className={styles.removeButton}
                    onClick={() => removeItem(val._id)}
                    aria-label="Remove item"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <button onClick={backToTransaction}>To transaction</button> */}
    </div>
  );
}

export default TableIncomeExpenses;
