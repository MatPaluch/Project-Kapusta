import Balans from 'components/Balans/Balans';
import HomeInput from 'components/HomeInput/HomeInput';

import { ToTransaction } from 'components/ToTransaction/ToTransaction';

const Home = () => {
  return (
    <div>
      <ToTransaction />
      <Balans />
      <HomeInput />
    </div>
  );
};
export default Home;
