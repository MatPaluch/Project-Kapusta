import styles from './ModalAreYouSure.module.css';

const ModalAreYouSure = ({ clickYes, clickNo }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <p className={styles.paragraphModal}>Are you sure?</p>
        <div className={styles.modalButtons}>
          <button onClick={clickYes} className={styles.confirmButton}>
            Yes
          </button>
          <button onClick={clickNo} className={styles.cancelButton}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAreYouSure;
