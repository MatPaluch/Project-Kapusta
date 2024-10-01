import styles from './ToTransaction.module.css';
import icons from '../../images/icons.svg';

export function ToTransaction({ handler }) {
  return (
    <button className={styles.backspaceBox} onClick={handler}>
      <svg className={styles.reportsSVG}>
        <use href={`${icons}#icon-keyboard-backspace`}></use>
      </svg>
      <span>to transactions</span>
    </button>
  );
}
