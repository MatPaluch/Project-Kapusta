import { createSlice } from '@reduxjs/toolkit';
import {
  fetchReportExpenseCategories,
  fetchReportIncomeCategories,
} from './reportsActions';

const initialState = {
  incomeCategories: [],
  expenseCategories: [],
  loading: false,
  error: null,
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Obsługa danych przychodów
      .addCase(fetchReportIncomeCategories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReportIncomeCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.incomeCategories = action.payload;
      })
      .addCase(fetchReportIncomeCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Obsługa danych wydatków
      .addCase(fetchReportExpenseCategories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReportExpenseCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.expenseCategories = action.payload;
      })
      .addCase(fetchReportExpenseCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reportIncomeCategories, reportExpenseCategories } =
  reportsSlice.actions;

export default reportsSlice.reducer;
