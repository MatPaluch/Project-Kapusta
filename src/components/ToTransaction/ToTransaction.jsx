import styles from './ToTransaction.module.css';
import icons from '../../images/icons.svg';

export function ToTransaction({ onClick }) {
  return (
    <button className={styles.backspaceBox} onClick={onClick}>
      <svg className={styles.reportsSVG}>
        <use href={`${icons}#icon-keyboard-backspace`}></use>
      </svg>
      <span>to transaction</span>
    </button>
  );
}
