import Calendar from '../Calendar/Calendar.jsx';
import MultiForm from '../MultiForm/MultiForm.jsx';
import SummaryList from '../SummaryList/SummaryList.jsx';
import TableDesktop from '../TableDesktop/TableDesktop.jsx';
import styles from './MainBody.module.css';

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
