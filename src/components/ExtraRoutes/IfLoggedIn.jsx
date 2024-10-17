import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const IfLoggedIn = ({ redirectTo, otherwise: Component }) => {
  // Znak : zamienia nazwe elseShow na Component
  const isLoggedIn = useSelector(state => state.auth.token);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default IfLoggedIn;
