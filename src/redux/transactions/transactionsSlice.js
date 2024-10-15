import { createSlice } from '@reduxjs/toolkit';
import {
  deleteExpenseTransaction,
  fetchExpenseCategories,
  fetchExpenseTransactions,
  fetchIncomeTransactions,
  handleSubmit,
} from './transactionsActions';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    formElements: {
      description: '',
      category: '',
      amount: '',
    },
    currentDate: null,
    expensesCategories: [],
    incomesCategories: [],
    expenses: [],
    incomes: [],
    loading: false,
    error: null,
  },
  reducers: {
    setCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    },
    setDescription: (state, action) => {
      state.formElements.description = action.payload;
    },
    setCategory: (state, action) => {
      state.formElements.category = action.payload;
    },
    setAmount: (state, action) => {
      state.formElements.amount = action.payload;
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
        state.expenses = state.expenses.filter(
          transaction => transaction._id !== action.payload.id
        );
      })
      .addCase(deleteExpenseTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchExpenseCategories.fulfilled, (state, action) => {
        state.expensesCategories = action.payload;
      });
  },
});
export const { setCurrentDate, setDescription, setCategory, setAmount } = transactionsSlice.actions;

export default transactionsSlice.reducer;
