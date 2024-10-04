import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReportExpenseCategories = createAsyncThunk(
  'register',
  async (period, { rejectWithValue }) => {
    try {
      const formattedPeriod = period.slice(0, 7);

      const response = await axios.get(
        'https://project-kapusta-rest-api.vercel.app/transaction/period-data',
        {
          params: { period: formattedPeriod },
        }
      );

      return response.data.expenses;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const loginUser = async credentials => {
  const response = await axios.post(
    'https://project-kapusta-rest-api.vercel.app/auth/login',
    credentials
  );
  return response.data;
};

export const fetchUserData = async token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const response = await axios.get(
    'https://project-kapusta-rest-api.vercel.app/user'
  );
  return response.data;
};

export const decodeToken = async token => {
  const jwtDecodeModule = await import('jwt-decode');
  const jwtDecode = jwtDecodeModule.default || jwtDecodeModule.jwtDecode;

  if (typeof jwtDecode !== 'function') {
    throw new Error('jwtDecode is not a function');
  }

  return jwtDecode(token);
};
