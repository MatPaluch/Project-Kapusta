import Balans from 'components/Balans/Balans';
import Calendar from 'components/Calendar/Calendar';

import { ToTransaction } from 'components/ToTransaction/ToTransaction';

// import ExpensesIncome from 'components/ExpensesIncome/ExpensesIncome';

const Home = () => {
  return (
    <div>
      <ToTransaction />
      <Balans />
      <Calendar />
      {/* <ExpensesIncome expenses={expenses} income={income} /> */}
    </div>
  );
};
export default Home;
