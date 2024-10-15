import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authorization/authSlice';
import userReducer from './user/userSlice';
import periodReducer from './period/periodSlice';
import transactionsReducer from './transactions/transactionsSlice';
import reportsReducer from './reports/reportsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    period: periodReducer,
    reports: reportsReducer,
    transactions: transactionsReducer,
  },
});
