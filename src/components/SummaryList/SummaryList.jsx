import { useSelector } from 'react-redux';
import styles from './SummaryList.module.css';
const SummaryList = () => {
  const monthStats = useSelector(state => state.transactions.summary);
  const arrayOfObj = Object.entries(monthStats);

  return (
    <div className={styles.summaryBox}>
      <h4 className={styles.header}>Summary</h4>
      <ul className={styles.list}>
        {arrayOfObj.map(([key, value]) => (
          <li className={styles.element}>
            <span>{key}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SummaryList;
