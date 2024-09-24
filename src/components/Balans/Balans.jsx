import ModalBilance from 'components/ModalBilance/ModalBilance';
import { setBalance } from '../../redux/userSlice';
import styles from './Balans.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function Balans() {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.user.balance);
  return (
    <div className={styles.balanceBox}>
      <p className={styles.label}>Balance:</p>
      <div className={styles.amountBox}>
        <div className={styles.inputBox}>
          <input
            className={styles.amount}
            value={balance}
            onChange={e => {
              const value = e.target.value.replace(/[^0-9]/g, '');
              dispatch(setBalance({ value }));
            }}
            type="text"
            pattern="\d*"
            inputMode="numeric"
          />
          <span className={styles.pln}>PLN</span>
        </div>
        <button className={`${balance > 0 ? styles.confirm : styles.disabled}`}>
          Confirm
        </button>
      </div>
      {balance === 0 && <ModalBilance />}
    </div>
  );
}

export default Balans;
