import Balans from 'components/Balans/Balans';
import ExpensesIncome from 'components/ExpensesIncome/ExpensesIncome';

const Home = () => {
  const expenses = Number('1223');
  const income = Number('2137');
  const amaunt = Number(income - expenses);

  return (
    <div>
      <Balans amaunt={amaunt} />
      <ExpensesIncome expenses={expenses} income={income} />
    </div>
  );
};
export default Home;
