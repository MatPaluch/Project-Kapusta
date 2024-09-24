import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 0,
};

const userSlice = createSlice({
  name: 'user',

  initialState,

  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload.value;
    },
  },
});

export const { setBalance } = userSlice.actions;

export default userSlice.reducer;
