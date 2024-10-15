import { BackToHome } from 'components/BackToHome/BackToHome';
import Balans from 'components/Balans/Balans';
import Calendar from 'components/Calendar/Calendar';
import ExpensesTableMobile from 'components/ExpensesTableMobile/ExpensesTableMobile';
import MultiForm from 'components/MultiForm/MultiForm';
import TabsExpensesIncomes from 'components/TabsExpensesIncomes/TabsExpensesIncomes';

import { ToTransaction } from 'components/ToTransaction/ToTransaction';
import { useEffect, useState } from 'react';

const IncomesPage = () => {
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
        <MultiForm page={'income'} />
      </>
    ) : (
      <>
        <ToTransaction onClick={() => setShowTransactionForm(true)} />
        <Balans />
        <Calendar />
        <ExpensesTableMobile page={'income'} />
        <TabsExpensesIncomes page={'incomes'} />
      </>
    );
  } else {
    return (
      <>
        <Balans />
        <TabsExpensesIncomes page={'incomes'} />
      </>
    );
  }
};

export default IncomesPage;
