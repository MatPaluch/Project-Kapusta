import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expenseCategories: [],
  incomeCategories: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    fetchCategoriesStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchCategoriesSuccess: (state, action) => {
      const { categoriesType, data } = action.payload;
      state.loading = false;
      if (categoriesType === 'expenses') {
        state.expenseCategories = data;
      } else if (categoriesType === 'incomes') {
        state.incomeCategories = data;
      }
    },
    fetchCategoriesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
