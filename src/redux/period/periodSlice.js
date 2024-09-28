import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPeriod: new Date().toISOString(),
};

export const periodSlice = createSlice({
  name: 'period',
  initialState,
  reducers: {
    setSelectedPeriod: (state, action) => {
      state.selectedPeriod = action.payload;
    },
    previousMonth: state => {
      const currentDate = new Date(state.selectedPeriod);
      currentDate.setMonth(currentDate.getMonth() - 1);
      state.selectedPeriod = currentDate.toISOString();
    },

    nextMonth: state => {
      const currentDate = new Date(state.selectedPeriod);
      currentDate.setMonth(currentDate.getMonth() + 1);
      state.selectedPeriod = currentDate.toISOString();
    },
  },
});
export const { setSelectedPeriod, previousMonth, nextMonth } =
  periodSlice.actions;

export default periodSlice.reducer;
