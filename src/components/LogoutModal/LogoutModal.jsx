import React from 'react';
import styles from './LogoutModal.module.css';

const LogoutModal = ({ onConfirm, onCancel }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <p className={styles.paragraphModal}>Do you really want to leave?</p>
        <div className={styles.modalButtons}>
          <button onClick={onConfirm} className={styles.confirmButton}>
            Yes
          </button>
          <button onClick={onCancel} className={styles.cancelButton}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
