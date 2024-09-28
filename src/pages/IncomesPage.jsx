import Balans from 'components/Balans/Balans';
import { Layout } from 'components/Layout/Layout';
import { ToTransaction } from 'components/ToTransaction/ToTransaction';

export const IncomesPage = () => {
  return (
    <Layout>
      <div>
        <ToTransaction />
        <Balans />
        {/* Tutaj dodajemy komponenty dla zakładki wydatków */}
      </div>
    </Layout>
  );
};
