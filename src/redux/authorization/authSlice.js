import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser } from './operations';

const initialState = {
  token: null,
  user: null,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.userData;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.token = null;
        state.user = null;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const { loginSuccess, loginRequest, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
