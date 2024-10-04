import BounceLoader from 'react-spinners/BounceLoader';
import style from './ModalLoader.module.css';

const ModalLoader = () => {
  return (
    <div className={style.modal}>
      <BounceLoader loading={true} />
    </div>
  );
};
export default ModalLoader;
