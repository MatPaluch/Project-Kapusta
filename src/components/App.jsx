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
            <IfLoggedIn redirectTo={'/expense'} otherwise={<LoginPage />} />
          }
        />
        <Route
          path="register"
          element={
            <IfLoggedIn redirectTo={'/expense'} otherwise={<RegisterPage />} />
          }
        />
        <Route
          path="expense"
          element={<IfNotLoggedIn redirectTo={'/login'} otherwise={<Home />} />}
        />
        <Route
          path="income"
          element={
            <IfNotLoggedIn redirectTo={'/login'} otherwise={<IncomesPage />} />
          }
        />
        <Route
          path="reports"
          element={
            <IfNotLoggedIn redirectTo={'/login'} otherwise={<ReportsPage />} />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
