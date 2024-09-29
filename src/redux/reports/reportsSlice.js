import { createSlice } from '@reduxjs/toolkit';
import {
  fetchReportExpenseCategories,
  fetchReportIncomeCategories,
} from './reportsActions';

const initialState = {
  incomeCategories: {
    incomesData: {},
  },
  expenseCategories: {
    expensesData: {},
  },
  loading: false,
  error: null,
  selectedCategory: null,
  selectedType: 'expenses',
  categoryData: {},
};

// cofac dotad

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setSelectedType(state, action) {
      state.selectedType = action.payload;
    },
    setCategoryData(state, action) {
      state.categoryData = action.payload;
    },
  },
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

export const {
  reportIncomeCategories,
  reportExpenseCategories,
  setSelectedCategory,
  setSelectedType,
  setCategoryData,
} = reportsSlice.actions;

export default reportsSlice.reducer;
