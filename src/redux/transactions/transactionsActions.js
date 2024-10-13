import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const handleSubmit = createAsyncThunk(
  'transactions/submit',
  async (bodyExpense, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://project-kapusta-rest-api.vercel.app/transaction/expense',
        bodyExpense
      );

      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchExpenseTransactions = createAsyncThunk(
  'transactions/fetchExpenseTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://project-kapusta-rest-api.vercel.app/transaction/expense'
      );

      return response.data.expenses;
    } catch (error) {
      console.error('Error fetching data:', error);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const fetchIncomeTransactions = createAsyncThunk(
  'transactions/fetchIncomeTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://project-kapusta-rest-api.vercel.app/transaction/income'
      );

      return response.data.incomes;
    } catch (error) {
      console.error('Error fetching data:', error);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const deleteExpenseTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://project-kapusta-rest-api.vercel.app/transaction/${id}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchExpenseCategories = createAsyncThunk(
  'transactions/fetchExpenseCategories',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://project-kapusta-rest-api.vercel.app/transaction/expense-categories'
      );
      console.log(response.data.expenseCategories);
      return response.data.expenseCategories;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
