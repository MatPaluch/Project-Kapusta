import { BackToHome } from 'components/BackToHome/BackToHome';
import Balans from 'components/Balans/Balans';
import Calendar from 'components/Calendar/Calendar';

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
        <div>Formularz</div>
      </>
    ) : (
      <>
        <ToTransaction onClick={() => setShowTransactionForm(true)} />
        <Balans />
        <Calendar />
      </>
    );
  } else {
    return <div>Desktop</div>;
  }
};

export default ExpensesPage;
