import Balans from 'components/Balans/Balans';
import { ToTransaction } from 'components/ToTransaction/ToTransaction';

const Home = () => {
  return (
    <div>
      <ToTransaction />
      <Balans />
    </div>
  );
};
export default Home;
