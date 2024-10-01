import HomeInput from 'components/HomeInput/HomeInput';
import styles from './TableIncomeExpenses.module.css';

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
  function removeItem() {
    // ta funkcja ma usuwać przedmioty po ID
  }

  return (
    <div className={styles.box}>
      <HomeInput />
      <table className={styles.table}>
        <tr className={styles.tableHeader}>
          <th className={styles.tableHeaderItem}>date</th>
          <th className={styles.tableHeaderItem}>description</th>
          <th className={styles.tableHeaderItem}>category</th>
          <th className={styles.tableHeaderItem}>sum</th>
        </tr>
        {exampleData.map((val, key) => {
          return (
            <tr key={key} className={styles.tableRow}>
              <td className={styles.tableItemDate}>{val.date}</td>
              <td className={styles.tableItemDescription}>{val.description}</td>
              <td className={styles.tableItemCategory}>{val.category}</td>
              <td className={styles.tableItemSum}>
                {val.sum}
                <button
                  className={styles.removeButton}
                  onClick={removeItem}
                  value={val._id}
                />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default TableIncomeExpenses;
