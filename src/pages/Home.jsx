import { BackToHome } from 'components/BackToHome/BackToHome';
import Balans from 'components/Balans/Balans';
import ExpensesButton from 'components/ExpensesButtons/ExpensesButtons';
import HomeInput from 'components/HomeInput/HomeInput';
import TableIncomeExpenses from 'components/TableIncomeExpenses/TableIncomeExpenses';
import { ToTransaction } from 'components/ToTransaction/ToTransaction';
import React, { useState } from 'react';

const Home = () => {
  const [transaction, setTransaction] = useState('home');

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

        <TableIncomeExpenses />
      </>
    );
  }
  if (transaction === 'transaction')
    return (
      <>
        <BackToHome home={handleClick} />
        <HomeInput />
      </>
    );
};

export default Home;
