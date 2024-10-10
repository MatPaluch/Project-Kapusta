import { createSlice } from '@reduxjs/toolkit';
import {
  deleteTransaction,
  fetchExpenseTransactions,
  fetchIncomeTransactions,
  handleSubmit,
} from './transactionsActions';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    data: [],
    expenses: [],
    incomes: [],
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
        state.expenses.push(action.payload);
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
        state.expenses = action.payload;
      })
      .addCase(fetchExpenseTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchIncomeTransactions.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIncomeTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.incomes = action.payload;
      })
      .addCase(fetchIncomeTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteTransaction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter(transaction => transaction._id !== action.payload);
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default transactionsSlice.reducer;
