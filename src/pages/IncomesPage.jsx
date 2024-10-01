import Balans from 'components/Balans/Balans';
import { BackToHome } from 'components/BackToHome/BackToHome';
import IncomeButtons from 'components/IncomeButtons/IncomeButtons';
import { ToTransaction } from 'components/ToTransaction/ToTransaction';
import React, { useState, useEffect } from 'react';
import MobilePage from 'components/MobilePage/MobilePage';
import { IncomesTable } from 'components/IncomesTable/IncomesTable';
import { Layout } from 'components/Layout/Layout';

export const IncomesPage = () => {
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
        <Layout>
          <ToTransaction handler={handleClick} />
          <Balans />
          <IncomeButtons />
          <IncomesTable />
        </Layout>
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
