import BounceLoader from 'react-spinners/BounceLoader';
import style from './TableLoader.module.css';

const TableLoader = () => {
  return (
    <div className={style.modal}>
      <BounceLoader loading={true} color="#ff8311" />
    </div>
  );
};
export default TableLoader;
