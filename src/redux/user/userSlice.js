import { createSlice } from '@reduxjs/toolkit';
import { fetchUserData } from './userActions';

const initialState = {
  balance: '0',
  isBalanceSet: true,
  isPending: false,
};

const userSlice = createSlice({
  name: 'user',

  initialState,

  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    setIsBalanceSet: (state, action) => {
      state.isBalanceSet = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserData.pending, (state, action) => {
        state.isPending = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isPending = false;
        state.balance = action.payload.balance;
        state.isBalanceSet = action.payload.isBalanceSet;
      });
  },
});

export const { setBalance, setIsBalanceSet } = userSlice.actions;

export default userSlice.reducer;
