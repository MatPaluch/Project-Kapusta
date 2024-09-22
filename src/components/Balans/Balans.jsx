import styles from './Balans.module.css';
function Balans({ amaunt }) {
  return (
    <div className={styles.balansBox}>
      <p className={styles.label}>Balance:</p>
      <div className={styles.amauntBox}>
        <p className={styles.amaunt}>{amaunt}</p>
      </div>
      <div className={styles.confirmBox}>
        <p className={styles.confirm}>Confirm</p>
      </div>
    </div>
  );
}

export default Balans;
