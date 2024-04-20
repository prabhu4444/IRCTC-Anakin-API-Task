import { createSlice } from '@reduxjs/toolkit';
import * as api from '../api';

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    setBooks(state, action) {
      return action.payload;
    },
  },
});

export const { setBooks } = booksSlice.actions;

export const getBooks = () => async (dispatch) => {
  try {
    const { data } = await api.getBooks();
    dispatch(setBooks(data.books));
  } catch (error) {
    console.log(error);
  }
};

export default booksSlice.reducer;
