import { useState } from 'react';
import styles from './InputBalance.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setBalance, setIsBalanceSet } from '../../redux/userSlice';
import axios from 'axios';
import ModalBilance from 'components/ModalBilance/ModalBilance';

function InputBalance() {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.user.balance);
  const isBalanceSet = useSelector(state => state.user.isBalanceSet);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmBalance = async () => {
    try {
      const response = await axios.patch(
        'https://project-kapusta-rest-api.vercel.app/user/balance',
        { balance: Number(balance) } // Wysyłamy aktualny stan balance do backendu
      );
      const value = String(response.data.data.balance);

      dispatch(setBalance({ value }));
      dispatch(setIsBalanceSet(true));
      alert('Balance updated!');
      closeModal();
    } catch (error) {
      console.error(
        'Failed to fetch user balance:',
        error.response ? error.response.data : error.message
      );
      alert('Failed to fetch user balance');
      closeModal();
    }
  };

  return (
    <div className={styles.balanceWraper}>
      <p className={styles.label}>Balance:</p>
      <form className={styles.amountBox} onSubmit={e => e.preventDefault()}>
        <div className={styles.inputBox}>
          {!isBalanceSet && <ModalBilance />}
          <input
            name="balance"
            className={styles.amount}
            value={balance || '0'}
            onChange={handleChange}
            type="text"
            pattern="\d*"
            inputMode="numeric"
            disabled={isBalanceSet}
          />
          <span className={styles.pln}>PLN</span>
        </div>
        <button
          type="button"
          className={`${isBalanceSet ? styles.disabled : styles.confirm}`}
          disabled={isBalanceSet}
          onClick={openModal}
        >
          Confirm
        </button>
      </form>

      {/* Modal window */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <p className={styles.paragraphModal}>Are you sure?</p>
            <div className={styles.modalButtons}>
              <button onClick={confirmBalance} className={styles.confirmButton}>
                Yes
              </button>
              <button onClick={closeModal} className={styles.cancelButton}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InputBalance;
