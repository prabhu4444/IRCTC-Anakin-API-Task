import { createSlice } from '@reduxjs/toolkit';
import * as api from '../api';

const trainsSlice = createSlice({
  name: 'trains',
  initialState: [],
  reducers: {
    setTrains(state, action) {
      return action.payload;
    },
  },
});

export const { setTrains } = trainsSlice.actions;

export const getTrains = () => async (dispatch) => {
  try {
    const { data } = await api.getTrains();
    dispatch(setTrains(data.trains));
  } catch (error) {
    console.log(error.message);
  }
};

export default trainsSlice.reducer;