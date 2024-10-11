import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Calendar.module.css';
import icons from '../../images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDate } from '../../redux/transactions/transactionsSlice';

export const Calendar = () => {
  const dispatch = useDispatch();
  const currentDate = useSelector(state => state.transactions.currentDate);

  const handleDateChange = async date => {
    const formattedDate = date.toLocaleDateString('pl-PL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    await dispatch(setCurrentDate(formattedDate));
    console.log(currentDate);
  };

  // let dateFormatted = startDate;
  // let dd = dateFormatted.getDate();
  // let mm = dateFormatted.getMonth() + 1;
  // let yyyy = dateFormatted.getFullYear();

  // if (dd < 10) {
  //   dd = '0' + dd;
  // }
  // if (mm < 10) {
  //   mm = '0' + mm;
  // }
  // dateFormatted = dd + '.' + mm + '.' + yyyy;

  const CustomInput = forwardRef(({ value, onClick, className }, ref) => (
    <button type="button" className={className} onClick={onClick} ref={ref}>
      <svg className={styles.calendarIcon}>
        <use href={`${icons}#icon-calendar`}></use>
      </svg>
      {value}
    </button>
  ));

  return (
    <div className={styles.calendarBox}>
      <DatePicker
        className={styles.calendar}
        selected={currentDate}
        onChange={handleDateChange} // Używamy nowej funkcji
        dateFormat="dd.MM.yyyy" // Ustal format daty
        customInput={<CustomInput className={styles.customButtonCalendar} />}
      />
    </div>
  );
};
export default Calendar;
