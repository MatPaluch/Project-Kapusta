import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryType: 'expenses',
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
      const { categoryType, data } = action.payload;
      state.loading = false;
      if (categoryType === 'expenses') {
        state.expenseCategories = data;
      } else if (categoryType === 'incomes') {
        state.incomeCategories = data;
      }
    },
    fetchCategoriesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setCategoryType: (state, action) => {
      state.categoryType = action.payload;
    },
  },
});

export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  setCategoryType,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
