import styles from './ToTransaction.module.css';
import icons from '../../images/icons.svg';
import { useDispatch } from 'react-redux';
import {
  fetchReportExpenseCategories,
  fetchReportIncomeCategories,
} from '../../redux/reports/reportsActions';

export const ToTransaction = () => {
  const dispatch = useDispatch();

  // Funkcja obliczająca aktualny okres w formacie yyyy-mm
  const getCurrentPeriod = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // dodanie wiodącego zera dla miesięcy 1-9
    return `${year}-${month}`;
  };

  // Funkcja obsługi kliknięcia
  const handleClick = () => {
    const period = getCurrentPeriod(); // pobierz aktualny okres

    // Wywołanie akcji pobierających dane
    dispatch(fetchReportIncomeCategories({ period }));
    dispatch(fetchReportExpenseCategories({ period }));
  };

  return (
    <button className={styles.backspaceBox} onClick={handleClick}>
      <svg className={styles.reportsSVG}>
        <use href={`${icons}#icon-keyboard-backspace`}></use>
      </svg>
      <span>to transactions</span>
    </button>
  );
};
