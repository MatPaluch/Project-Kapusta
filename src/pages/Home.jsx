import Balans from 'components/Balans/Balans';
import HomeInput from 'components/HomeInput/HomeInput';

import { ToTransaction } from 'components/ToTransaction/ToTransaction';

// import ExpensesIncome from 'components/ExpensesIncome/ExpensesIncome';

const Home = () => {
  return (
    <div>
      <ToTransaction />
      <Balans />
      <HomeInput />
      {/* <ExpensesIncome expenses={expenses} income={income} /> */}
    </div>
  );
};
export default Home;
