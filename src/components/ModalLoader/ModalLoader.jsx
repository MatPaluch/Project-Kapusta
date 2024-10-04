import BounceLoader from 'react-spinners/BounceLoader';
import style from './ModalLoader.module.css';
import { useEffect } from 'react';

const ModalLoader = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Wyłączenie scrollowania
  }, []);
  return (
    <div className={style.modal}>
      <BounceLoader loading={true} />
    </div>
  );
};
export default ModalLoader;
