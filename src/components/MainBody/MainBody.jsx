import styles from './MainBody.module.css';
import Calendar from 'components/Calendar/Calendar';
import MultiForm from 'components/MultiForm/MultiForm';
import SummaryList from 'components/SummaryList/SummaryList';
import TableDesktop from 'components/TableDesktop/TableDesktop';

const MainBody = ({ page }) => {
  return (
    <div className={styles.mainBody}>
      <div className={styles.inputs}>
        <Calendar />
        <MultiForm page={page} />
      </div>
      <div className={styles.lists}>
        <TableDesktop page={page} />
        <SummaryList page={page} />
      </div>
    </div>
  );
};
export default MainBody;
