import { BackToHome } from 'components/BackToHome/BackToHome';
import Balans from 'components/Balans/Balans';
import Calendar from 'components/Calendar/Calendar';
import ExpenseForm from 'components/ExpenseForm/ExpenseForm';
import ExpensesTableMobile from 'components/ExpensesTableMobile/ExpensesTableMobile';

import { ToTransaction } from 'components/ToTransaction/ToTransaction';
import { useEffect, useState } from 'react';

const ExpensesPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showTransactionForm, setShowTransactionForm] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return showTransactionForm ? (
      <>
        <BackToHome onClick={() => setShowTransactionForm(false)} />
        <ExpenseForm />
      </>
    ) : (
      <>
        <ToTransaction onClick={() => setShowTransactionForm(true)} />
        <Balans />
        <Calendar />
        <ExpensesTableMobile />
      </>
    );
  } else {
    return <div>Desktop</div>;
  }
};

export default ExpensesPage;
