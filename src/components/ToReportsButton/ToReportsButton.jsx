import styles from './ToReportsButton.module.css';
import icons from '../../images/icons.svg';
import { Link } from 'react-router-dom';

export const ToReportsButton = () => {
  return (
    <Link to="/reports" className={styles.reportsBox}>
      <span>Reports</span>
      <svg className={styles.reportsSVG}>
        <use href={`${icons}#icon-reports`}></use>
      </svg>
    </Link>
  );
};
