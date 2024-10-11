import { createSlice } from '@reduxjs/toolkit';
import {
  deleteExpenseTransaction,
  fetchExpenseTransactions,
  fetchIncomeTransactions,
  handleSubmit,
} from './transactionsActions';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    currentDate: new Date().toLocaleDateString('pl-PL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
    expenses: [],
    incomes: [],
    loading: false,
    error: null,
  },
  reducers: {
    setCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    },
  },
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

      .addCase(deleteExpenseTransaction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteExpenseTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.expenses = state.expenses.filter(transaction => transaction._id !== action.payload);
      })
      .addCase(deleteExpenseTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { setCurrentDate } = transactionsSlice.actions;

export default transactionsSlice.reducer;
