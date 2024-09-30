import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const handleSubmit = createAsyncThunk(
  'transaction/submit',
  async (formData, { rejectWithValue }) => {
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

      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const deleteTransaction = createAsyncThunk(
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
