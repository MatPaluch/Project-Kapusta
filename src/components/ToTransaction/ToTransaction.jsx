import styles from './ToTransaction.module.css';
import icons from '../../images/icons.svg';

export const ToTransaction = () => {
  return (
    <button className={styles.backspaceBox}>
      <svg className={styles.reportsSVG}>
        <use href={`${icons}#icon-keyboard-backspace`}></use>
      </svg>
      <span>to transactions</span>
    </button>
  );
};
