import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const handleExpenseSubmit = createAsyncThunk(
  'transactions/handleExpenseSubmit',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://project-kapusta-rest-api.vercel.app/transaction/${payload.page}`,
        payload.bodyTransaction
      );
      return response.data;
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (page, { rejectWithValue }) => {
    console.log(page);
    try {
      const response = await axios.get(
        `https://project-kapusta-rest-api.vercel.app/transaction/${page}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
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

      return response.data.expenseCategories;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchIncomeCategories = createAsyncThunk(
  'transactions/fetchIncomeCategories',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://project-kapusta-rest-api.vercel.app/transaction/income-categories'
      );
      console.log(response.data);
      return response.data.incomeCategories;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
