import { BackToHome } from 'components/BackToHome/BackToHome';
import Balans from 'components/Balans/Balans';
import Calendar from 'components/Calendar/Calendar';
import ExpenseBody from 'components/ExpenseBody/ExpenseBody';
import MultiForm from 'components/MultiForm/MultiForm';
import TableMobile from 'components/TableMobile/TableMobile';
import TabsExpensesIncomes from 'components/TabsExpensesIncomes/TabsExpensesIncomes';

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
        <MultiForm page={'expense'} />
      </>
    ) : (
      <>
        <ToTransaction onClick={() => setShowTransactionForm(true)} />
        <Balans />
        <Calendar />
        <TableMobile page={'expense'} />
        <TabsExpensesIncomes page={'expenses'} />
      </>
    );
  } else {
    return (
      <>
        <Balans />
        <TabsExpensesIncomes page={'expenses'} />
        <ExpenseBody />
      </>
    );
  }
};

export default ExpensesPage;
