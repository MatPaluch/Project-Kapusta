import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setBalance } from '../../redux/user/userSlice';
import { fetchUserData, setUserBalance } from '../../redux/user/userActions';
import styles from './InputBalance.module.css';
import ModalBilance from 'components/ModalBilance/ModalBilance';
import ModalAreYouSure from 'components/ModalAreYouSure/ModalAreYouSure';

function InputBalance() {
  const dispatch = useDispatch();
  const { balance, isPending, isBalanceSet } = useSelector(state => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const handleChange = e => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    if (value !== '0') {
      value = value.replace(/^0+/, ''); // Usuwa wiodące zera, jeśli wartość nie jest równa 0
    }
    if (value === '') {
      value = '0'; // W przypadku pustej wartości ustawiamy 0
    }
    dispatch(setBalance(value));
  };

  const openModal = e => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmBalance = () => {
    const resFromSetBalance = new Promise((resolve, reject) => {
      dispatch(setUserBalance(Number(balance))).then(response => {
        if (response.error) {
          reject(response.payload.message);
        } else {
          resolve(response.payload.message);
        }
      });
    });

    toast.promise(
      resFromSetBalance,
      {
        pending: 'Please wait ...',
        success: {
          render({ data }) {
            return `${data}`;
          },
        },
        error: {
          render({ data }) {
            return `Error ${data}`;
          },
        },
      },
      { autoClose: 2000 }
    );
    closeModal();
  };

  return (
    <div className={styles.balanceWraper}>
      <p className={styles.label}>Balance:</p>
      <form className={styles.amountBox} onSubmit={openModal}>
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
          type="submit"
          className={`${isBalanceSet ? styles.disabled : styles.confirm}`}
          disabled={isBalanceSet}
        >
          {isPending ? 'Loading' : 'Confirm'}
        </button>
      </form>

      {/* Modal window */}
      {isModalOpen && <ModalAreYouSure clickYes={confirmBalance} clickNo={closeModal} />}
    </div>
  );
}

export default InputBalance;
