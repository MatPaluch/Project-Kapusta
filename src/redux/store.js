import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userReducer from './userSlice';
import categoriesReducer from './categories/categoriesSlice';
import periodReducer from './period/periodSlice';
import transactionReducer from './transaction/transactionSlice';

import reportsReducer from './reports/reportsSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    categories: categoriesReducer,
    period: periodReducer,
    reports: reportsReducer,
    transaction: transactionReducer,
  },
});
