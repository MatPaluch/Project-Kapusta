export const SET_PERIOD = 'SET_PERIOD';

export const setPeriod = newPeriod => ({
  type: SET_PERIOD,
  payload: newPeriod, // Przekazujemy obiekt Date, ale reducer go przekształci
});
