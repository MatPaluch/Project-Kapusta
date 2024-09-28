import Balans from 'components/Balans/Balans';
import HomeInput from 'components/HomeInput/HomeInput';

import { ToTransaction } from 'components/ToTransaction/ToTransaction';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <ToTransaction />
      <Balans />
      <HomeInput />
      <Link to="/incomes">Incomes</Link>
    </div>
  );
};

export default Home;
