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
