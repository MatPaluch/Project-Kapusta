import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Importuj useSelector
import PrivateRoute from './PrivateRout/PrivateRout';
import { Layout } from './Layout/Layout';
import LoginPage from '../pages/LoginPage'; // Zaktualizuj import do LoginPage
import ReportsPage from 'pages/ReportsPage';
import { IncomesPage } from 'pages/IncomesPage';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/RegisterPage.jsx'));

export const App = () => {
  const { token } = useSelector(state => state.auth); // Sprawdź token w Redux

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout>
                <Home />
                {/* Zawsze renderuj Home, gdy użytkownik jest zalogowany */}
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/incomes"
          element={
            <PrivateRoute>
              <IncomesPage />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/reports"
          element={
            <PrivateRoute>
              <Layout>
                <ReportsPage />
                {/* Reszta routingu stron */}
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              {!token ? <LoginPage /> : <Home />}
              {/* Jeśli zalogowany, renderuj Home */}
            </Layout>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Suspense>
  );
};
