import styles from './Balans.module.css';
import icons from '../../images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setBalance, setIsBalanceSet } from '../../redux/userSlice';
import axios from 'axios';
import ModalBilance from 'components/ModalBilance/ModalBilance';
import { Link } from 'react-router-dom';

function Balans() {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.user.balance);
  console.log(balance);
  const isBalanceSet = useSelector(state => state.user.isBalanceSet);

  const handleChange = e => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    if (value !== '0') {
      value = value.replace(/^0+/, ''); // Usuwa wiodące zera, jeśli wartość nie jest równa 0
    }
    if (value === '') {
      value = '0'; // W przypadku pustej wartości ustawiamy 0
    }
    dispatch(setBalance({ value }));
  };

  const confirmBalance = async e => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        'https://project-kapusta-rest-api.vercel.app/user/balance',
        { balance: Number(balance) } // Wysyłamy aktualny stan balance do backendu
      );
      const value = String(response.data.data.balance);
      console.log(response);
      console.log(value);
      dispatch(setBalance({ value }));
      dispatch(setIsBalanceSet(true));
      alert('Balance updated!');
    } catch (error) {
      console.error(
        'Failed to fetch user balance:',
        error.response ? error.response.data : error.message
      );
      alert('Failed to fetch user balance');
    }
  };

  return (
    <div className={styles.balanceBox}>
      <Link to="/reports">
        <button className={styles.reportsBox}>
          <span>Reports</span>
          <svg className={styles.reportsSVG}>
            <use href={`${icons}#icon-reports`}></use>
          </svg>
        </button>
      </Link>

      <div className={styles.balanceWraper}>
        <p className={styles.label}>Balance:</p>
        <form className={styles.amountBox} onSubmit={confirmBalance}>
          <div className={styles.inputBox}>
            {!isBalanceSet && <ModalBilance />}
            <input
              name="balance"
              className={styles.amount}
              value={balance || '0111'} // Zabezpieczamy wartość, gdy balance jest undefined
              onChange={handleChange}
              type="text"
              pattern="\d*"
              inputMode="numeric"
              disabled={isBalanceSet}
            />
            <span className={styles.pln}>PLN</span>
          </div>
          <button
            type="submit"
            className={`${isBalanceSet ? styles.disabled : styles.confirm}`}
            disabled={isBalanceSet}
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default Balans;
