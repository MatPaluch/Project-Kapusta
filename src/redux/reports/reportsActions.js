import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchReportIncomeCategories = createAsyncThunk(
  'categories/fetchReportIncomeCategories',
  async (period, { rejectWithValue }) => {
    try {
      const formattedPeriod = period.slice(0, 7);

      const response = await axios.get(
        'https://project-kapusta-rest-api.vercel.app/transaction/period-data',
        {
          params: { period: formattedPeriod },
        }
      );

      return response.data.incomes;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const fetchReportExpenseCategories = createAsyncThunk(
  'categories/fetchReportExpenseCategories',
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
