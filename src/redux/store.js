import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authorization/authSlice';
import userReducer from './user/userSlice';
import categoriesReducer from './categories/categoriesSlice';
import periodReducer from './period/periodSlice';
import transactionsReducer from './transactions/transactionsSlice';

import reportsReducer from './reports/reportsSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    categories: categoriesReducer,
    period: periodReducer,
    reports: reportsReducer,
    transactions: transactionsReducer,
  },
});
