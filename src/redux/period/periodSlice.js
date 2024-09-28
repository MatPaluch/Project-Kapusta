import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPeriod: new Date().toISOString(), // Przechowujemy jako string
};

export const periodSlice = createSlice({
  name: 'period',
  initialState,
  reducers: {
    setSelectedPeriod: (state, action) => {
      state.selectedPeriod = action.payload;
    },
    previousMonth: state => {
      const prevMonth = new Date(
        state.selectedPeriod.setMonth(state.selectedPeriod.getMonth() - 1)
      );
      state.selectedPeriod = new Date(prevMonth);
    },

    nextMonth: state => {
      const nextMonth = new Date(
        state.selectedPeriod.setMonth(state.selectedPeriod.getMonth() + 1)
      );
      state.selectedPeriod = new Date(nextMonth);
    },
  },
});
export const { setSelectedPeriod, previousMonth, nextMonth } =
  periodSlice.actions;

export default periodSlice.reducer;
