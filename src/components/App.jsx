import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRout/PrivateRout';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('./Login/Login.jsx'));
const Register = lazy(() => import('./Register/Register.jsx'));
const Report = lazy(() => import('../pages/Report'));
// Reszta importów stron

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              {/* <Home /> */}
              <Report />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Reszta routingu stron */}
      </Routes>
    </Suspense>
  );
};
