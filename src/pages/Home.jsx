import Balans from 'components/Balans/Balans';

import { ToTransaction } from 'components/ToTransaction/ToTransaction';

// import ExpensesIncome from 'components/ExpensesIncome/ExpensesIncome';

const Home = () => {
  return (
    <div>
      <ToTransaction />
      <Balans />

      {/* <ExpensesIncome expenses={expenses} income={income} /> */}
    </div>
  );
};
export default Home;
