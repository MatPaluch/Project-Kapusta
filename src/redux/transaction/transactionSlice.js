import { createSlice } from '@reduxjs/toolkit';
import {
  deleteTransaction,
  fetchExpenseTransactions,
  handleSubmit,
} from './transactionActions';

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(handleSubmit.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(handleSubmit.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(handleSubmit.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      })
      .addCase(fetchExpenseTransactions.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExpenseTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.expenses;
      })

      .addCase(fetchExpenseTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteTransaction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter(
          transaction => transaction._id !== action.payload
        );
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default transactionSlice.reducer;
