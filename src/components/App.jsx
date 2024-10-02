import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import IfNotLoggedIn from './ExtraRoutes/IfNotLoggedIn';
import IfLoggedIn from './ExtraRoutes/IfLoggedIn';
import { Layout } from './Layout/Layout';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const Home = lazy(() => import('../pages/ExpensesPage'));
const IncomesPage = lazy(() => import('../pages/IncomesPage'));
const ReportsPage = lazy(() => import('../pages/ReportsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/login" />} />
        <Route
          path="login"
          element={
            <Redirect toIfLoggedIn={'/expense'} showIfNot={<LoginPage />} />
          }
        />
        <Route
          path="register"
          element={
            <Redirect toIfLoggedIn={'/expense'} showIfNot={<RegisterPage />} />
          }
        />
        <Route
          path="expense"
          element={<Redirect toIfLoggedIn={'/expense'} showIfNot={<Home />} />}
        />
        <Route path="income" element={<IncomesPage />} />
        <Route path="reports" element={<ReportsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
