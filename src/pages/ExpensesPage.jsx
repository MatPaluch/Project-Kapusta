import { BackToHome } from 'components/BackToHome/BackToHome';
import Balans from 'components/Balans/Balans';
import ExpensesButton from 'components/ExpensesButtons/ExpensesButtons';
import { ExpensesTable } from 'components/ExpensesTable/ExpenseTable';
// import TableIncomeExpenses from 'components/TableIncomeExpenses/TableIncomeExpenses';
import { ToTransaction } from 'components/ToTransaction/ToTransaction';
import React, { useState, useEffect } from 'react';
import MobilePage from 'components/MobilePage/MobilePage';

const Home = () => {
  const [transaction, setTransaction] = useState('home');

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setTransaction('home');
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    if (transaction === 'home') {
      setTransaction('transaction');
    }
    if (transaction === 'transaction') {
      setTransaction('home');
    }

    console.log('klik!');
  };

  if (transaction === 'home') {
    return (
      <>
        <ToTransaction handler={handleClick} />
        <Balans />
        <ExpensesButton />
        <ExpensesTable />
      </>
    );
  }
  if (transaction === 'transaction')
    return (
      <>
        <BackToHome home={handleClick} />
        <MobilePage />
      </>
    );
};

export default Home;
