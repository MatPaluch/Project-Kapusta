import Balans from 'components/Balans/Balans';
import ModalBilance from 'components/ModalBilance/ModalBilance';
import { useSelector } from 'react-redux';
// import ExpensesIncome from 'components/ExpensesIncome/ExpensesIncome';

const Home = () => {
  const balance = useSelector(state => state.user.balance);
  console.log(balance);
  return (
    <div>
      <Balans />
      {/* <ExpensesIncome expenses={expenses} income={income} /> */}
      {balance === '0' && <ModalBilance />}
    </div>
  );
};
export default Home;
