import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://project-kapusta-rest-api.vercel.app';

const setHeaderAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearHeaderAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (payload, { rejectWithValue }) => {
    try {
      const body = payload; // Example { username: 'Xyz', email: 'xyz@example.com', password: 'Password1@' }
      const response = await axios.post('/auth/register', body);
      console.log(response)
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

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (payload, { rejectWithValue }) => {
    try {
      const body = payload; // Example { username: 'Xyz', email: 'xyz@example.com', password: 'Password1@' }
      const response = await axios.post('/auth/login', body);
      setHeaderAuthToken(response.data.token);
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

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (payload, { rejectWithValue }) => {
    try {
      const body = payload; // Example { username: 'Xyz', email: 'xyz@example.com', password: 'Password1@' }
      const response = await axios.post('/auth/logout', body);
      clearHeaderAuthToken();
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
