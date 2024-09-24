import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRout/PrivateRout';
import { Layout } from './Layout/Layout';
import LoginPage from '../pages/LoginPage'; // Zaktualizuj import do LoginPage

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('./Register/Register.jsx'));
// Reszta importów stron

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout>
                <Home />
                {/* Reszta routingu stron */}
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage /> {/* Użyj LoginPage zamiast Login */}
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
      </Routes>
    </Suspense>
  );
};
