import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchReportIncomeCategories = createAsyncThunk(
  'categories/fetchReportIncomeCategories',
  async (period, { rejectWithValue }) => {
    try {
      const formattedPeriod = period.slice(0, 7);
      console.log(period, 'formatted:', formattedPeriod);
      const response = await axios.get(
        'https://project-kapusta-rest-api.vercel.app/transaction/period-data',
        {
          params: { period: formattedPeriod }, // Przekazanie okresu jako parametru
        }
      );
      return response.data.incomes; // Oczekiwane dane przychodów
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
      console.log(period, 'formatted:', formattedPeriod);
      const response = await axios.get(
        'https://project-kapusta-rest-api.vercel.app/transaction/period-data',
        {
          params: { period: formattedPeriod }, // Przekazanie okresu jako parametru
        }
      );
      return response.data.expenses; // Oczekiwane dane wydatków
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
