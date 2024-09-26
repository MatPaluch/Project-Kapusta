import { ReportsBar } from 'components/ReportsBar/ReportsBar';
import { ReportCategories } from 'components/ReportCategories/ReportCategories';
import { ReportChart } from 'components/ReportChart/ReportChart';
import ExpensesIncome from 'components/ExpensesIncome/ExpensesIncome';

const ReportsPage = () => {
  return (
    <div>
      <ReportsBar />
      <ExpensesIncome />
      <ReportCategories />
      <ReportChart />
    </div>
  );
};
export default ReportsPage;
