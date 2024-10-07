import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get('/user');
      return response.data;
    } catch (error) {
      // Obsługa różnych typów błędów
      if (error.response) {
        // Serwer odpowiedział z kodem błędu
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        // Zapytanie zostało wysłane, ale brak odpowiedzi
        return rejectWithValue('No response from the server');
      } else {
        // Coś poszło źle przy konfiguracji zapytania
        return rejectWithValue(error.message);
      }
    }
  }
);

export const setUserBalance = createAsyncThunk(
  'user/setUserBalance',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch('/user/balance', { balance: payload });
      return response.data;
    } catch (error) {
      // Obsługa różnych typów błędów
      if (error.response) {
        // Serwer odpowiedział z kodem błędu
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        // Zapytanie zostało wysłane, ale brak odpowiedzi
        return rejectWithValue('No response from the server');
      } else {
        // Coś poszło źle przy konfiguracji zapytania
        return rejectWithValue(error.message);
      }
    }
  }
);
