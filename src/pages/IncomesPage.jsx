import Balans from 'components/Balans/Balans';
import IncomeButtons from 'components/IncomeButtons/IncomeButtons';
import { Layout } from 'components/Layout/Layout';
import TableIncomeExpenses from 'components/TableIncomeExpenses/TableIncomeExpenses';
import { ToTransaction } from 'components/ToTransaction/ToTransaction';

export const IncomesPage = () => {
  return (
    <Layout>
      <div>
        <ToTransaction />
        <Balans />
        <IncomeButtons />
        <TableIncomeExpenses />
        {/* Tutaj dodajemy komponenty dla zakładki wydatków */}
      </div>
    </Layout>
  );
};
