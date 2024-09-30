import Balans from 'components/Balans/Balans';
import ExpensesButton from 'components/ExpensesButtons/ExpensesButtons';
import TableIncomeExpenses from 'components/TableIncomeExpenses/TableIncomeExpenses';
import { ToTransaction } from 'components/ToTransaction/ToTransaction';

const Home = () => {
  return (
    <div>
      <ToTransaction />
      <Balans />
      <ExpensesButton />
      <TableIncomeExpenses />
    </div>
  );
};

export default Home;
