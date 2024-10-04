import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: '0',
  isBalanceSet: false,
};

const userSlice = createSlice({
  name: 'user',

  initialState,

  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload.value;
    },
    setIsBalanceSet: (state, action) => {
      state.isBalanceSet = action.payload;
    },
  },
});

export const { setBalance, setIsBalanceSet } = userSlice.actions;

export default userSlice.reducer;
