import ExpensesIncome from 'components/ExpensesIncome/ExpensesIncome';
import Balans from 'components/Balans/Balans';

const Report = () => {
  // Pod expenses i income trzeba podpiąć dane z backendu
  const expenses = Number('12.7');
  const income = Number('2137');

  const amaunt = Number(income - expenses);
  return (
    <>
      <Balans amaunt={amaunt} />
      <ExpensesIncome expenses={expenses} income={income} />
    </>
  );
};
export default Report;
