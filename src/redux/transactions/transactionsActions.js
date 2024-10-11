import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const handleSubmit = createAsyncThunk(
  'transaction/submit',
  async (formData, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://project-kapusta-rest-api.vercel.app/transaction/expense',
        JSON.stringify(formData),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      dispatch(fetchExpenseTransactions());

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchExpenseTransactions = createAsyncThunk(
  'transaction/fetchExpenseTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://project-kapusta-rest-api.vercel.app/transaction/expense'
      );

      return response.data.expenses;
    } catch (error) {
      console.error('Error fetching data:', error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const fetchIncomeTransactions = createAsyncThunk(
  'transaction/fetchIncomeTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://project-kapusta-rest-api.vercel.app/transaction/income'
      );

      return response.data.incomes;
    } catch (error) {
      console.error('Error fetching data:', error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const deleteExpenseTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        `https://project-kapusta-rest-api.vercel.app/transaction/${id}`
      );
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
