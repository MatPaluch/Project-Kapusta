import axios from 'axios';
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './categoriesSlice';

export const fetchExpenseCategories = () => async dispatch => {
  dispatch(fetchCategoriesStart());
  try {
    const response = await axios.get(
      'https://project-kapusta-rest-api.vercel.app/transaction/expense-categories'
    );
    dispatch(
      fetchCategoriesSuccess({
        categoriesType: 'expenses',
        data: response.data.expenseCategories,
      })
    );
  } catch (error) {
    dispatch(fetchCategoriesFailure(error.message));
  }
};

export const fetchIncomeCategories = () => async dispatch => {
  dispatch(fetchCategoriesStart());
  try {
    const response = await axios.get(
      'https://project-kapusta-rest-api.vercel.app/transaction/income-categories'
    );
    dispatch(
      fetchCategoriesSuccess({
        categoriesType: 'incomes',
        data: response.data.incomeCategories,
      })
    );
  } catch (error) {
    dispatch(fetchCategoriesFailure(error.message));
  }
};
