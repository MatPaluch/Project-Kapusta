import { useEffect, useState } from 'react';
import styles from './CustomSelect.module.css';

const CustomSelect = ({ name, placeholder, optionsArray, selectedOption, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(selectedOption);

  useEffect(() => {
    if (selectedOption === '') {
      setValue('');
    }
  }, [setValue, selectedOption]);

  const onClick = e => {
    setIsOpen(false);
    onChange(e);
    setValue(e.currentTarget.innerText);
  };

  return (
    <div onClick={() => setIsOpen(!isOpen)} className={styles.categorySelect}>
      <input
        type="text"
        name={name}
        className={styles.selectedOption}
        value={value}
        placeholder={placeholder}
        readOnly
      />
      <svg
        className={styles.arrowList}
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L6 5L11 1" stroke="#C7CCDC" strokeWidth="2" />
      </svg>
      {isOpen && (
        <ul className={styles.categoryList}>
          {optionsArray.map((option, index) => (
            <li key={index} onClick={onClick} className={styles.categoryOption}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
