import { createSlice } from '@reduxjs/toolkit';
import {
  deleteTransaction,
  fetchExpenseCategories,
  fetchTransactions,
  fetchIncomeCategories,
  handleExpenseSubmit,
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
    summary: {},
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
      .addCase(handleExpenseSubmit.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(handleExpenseSubmit.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(handleExpenseSubmit.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      })

      .addCase(fetchTransactions.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.expenses = action.payload?.expenses || [];
        state.incomes = action.payload?.incomes || [];
        state.summary = action.payload.monthStats;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteTransaction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.expenses = state.expenses.filter(
          transaction => transaction._id !== action.payload.id
        );
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchExpenseCategories.fulfilled, (state, action) => {
        state.expensesCategories = action.payload;
      })
      .addCase(fetchIncomeCategories.fulfilled, (state, action) => {
        state.incomesCategories = action.payload;
      });
  },
});
export const { setCurrentDate, setDescription, setCategory, setAmount } = transactionsSlice.actions;

export default transactionsSlice.reducer;
