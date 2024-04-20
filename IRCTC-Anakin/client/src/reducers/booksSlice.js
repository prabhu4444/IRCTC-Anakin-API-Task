// export default (books = [], action) => {
//   switch (action.type) {
//     case "GET_BOOKS":
//       return action.payload;
//     default:
//       return books;
//   }
// };
import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    getBooks(state, action) {
      return action.payload;
    },
  },
});

export const { getBooks } = booksSlice.actions;
export default booksSlice.reducer;
