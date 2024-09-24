import union from '../../images/Union.svg';
import styles from './ModalBilance.module.css';

function ModalBilance() {
  return (
    <div className={styles.moduleDiv}>
      <img src={union} className={styles.svg} alt="BackGroundModal" />
      <p className={styles.text}>
        Hello! To get started, enter the current balance of your account!
      </p>
      <p className={styles.textNext}>
        You can't spend money until you have it :)
      </p>
    </div>
  );
}

export default ModalBilance;
