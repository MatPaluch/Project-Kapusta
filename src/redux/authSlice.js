import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
  isLoading: false,
  error: null,
  isRefreshing: false,
  pending: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoading = false;
      state.error = null;
    },
    loginRequest: state => {
      state.isLoading = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: state => {
      state.token = null;
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
    refreshRequest: state => {
      state.isRefreshing = true;
      state.pending = true;
    },
    refreshSuccess: (state, action) => {
      state.token = action.payload.token;
      state.isRefreshing = false;
      state.pending = false;
      state.error = null;
    },
    refreshFailure: (state, action) => {
      state.isRefreshing = false;
      state.pending = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginSuccess,
  loginRequest,
  loginFailure,
  logout,
  refreshRequest,
  refreshSuccess,
  refreshFailure,
} = authSlice.actions;

export default authSlice.reducer;
