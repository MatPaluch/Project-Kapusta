import { createSlice } from '@reduxjs/toolkit';
import {
  deleteTransaction,
  fetchExpenseTransactions,
  fetchIncomeTransactions,
  handleExpenseSubmit,
  handleIncomeSubmit,
} from './transactionActions';

const transactionSlice = createSlice({
  name: 'transaction',
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
      .addCase(handleExpenseSubmit.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(handleExpenseSubmit.fulfilled, (state, action) => {
        state.loading = false;
        state.expenses.push(action.payload);
      })
      .addCase(handleExpenseSubmit.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      })
      .addCase(handleIncomeSubmit.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(handleIncomeSubmit.fulfilled, (state, action) => {
        state.loading = false;
        state.expenses.push(action.payload);
      })
      .addCase(handleIncomeSubmit.rejected, (state, action) => {
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
        const transactionId = action.payload;
        state.expenses = state.expenses.filter(
          transaction => transaction._id !== transactionId
        );
        state.incomes = state.incomes.filter(
          transaction => transaction._id !== transactionId
        );
        state.data = state.data.filter(
          transaction => transaction._id !== transactionId
        );
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default transactionSlice.reducer;
