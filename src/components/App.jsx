import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRout/PrivateRout';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('./Login/Login.jsx'));
const Register = lazy(() => import('./Register/Register.jsx'));
const Reports = lazy(() => import('../pages/Reports'));
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

        {/* Trasa dla strony /reports */}
        <Route
          path="/reports"
          element={
            // <PrivateRoute>
            <Layout>
              <Reports />
            </Layout>
            // </PrivateRoute>
          }
        />

        <Route
          path="/login"
          element={
            <Layout>
              <Login />
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
