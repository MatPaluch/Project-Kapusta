import styles from './ToReportsButton.module.css';
import icons from '../../images/icons.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReportIncomeCategories } from '../../redux/reports/reportsActions';

export const ToReportsButton = () => {
  const dispatch = useDispatch();
  const currentDateString = useSelector(state => state.period.selectedPeriod);

  return (
    <Link
      to="/reports"
      className={styles.reportsBox}
      onClick={() => dispatch(fetchReportIncomeCategories(currentDateString))}
    >
      <span>Reports</span>
      <svg className={styles.reportsSVG}>
        <use href={`${icons}#icon-reports`}></use>
      </svg>
    </Link>
  );
};
