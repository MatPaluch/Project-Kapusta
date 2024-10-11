import React, { forwardRef, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Calendar.module.css';
import icons from '../../images/icons.svg';
import { useDispatch } from 'react-redux';
import { setCurrentDate } from '../../redux/transactions/transactionsSlice';

export const Calendar = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const formattedDate = startDate.toLocaleDateString('pl-PL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    dispatch(setCurrentDate(formattedDate));
  }, [dispatch, startDate]);

  const handleDateChange = date => {
    setStartDate(date);
  };

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
        selected={startDate}
        onChange={handleDateChange} // Używamy nowej funkcji
        dateFormat="dd.MM.yyyy" // Ustal format daty
        customInput={<CustomInput className={styles.customButtonCalendar} />}
      />
    </div>
  );
};
export default Calendar;
