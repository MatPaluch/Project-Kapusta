import BounceLoader from 'react-spinners/BounceLoader';
import style from './ModalLoader.module.css';

const ModalLoader = () => {
  return (
    <div className={style.modal}>
      <BounceLoader loading={true} color="#ff8311" />
    </div>
  );
};
export default ModalLoader;
