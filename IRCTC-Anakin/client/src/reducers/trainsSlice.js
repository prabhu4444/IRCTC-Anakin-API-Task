// export default (trains = [], action) => {
//   switch (action.type) {
//     case "FETCH_ALL":
//       return action.payload;
//     default:
//       return trains;
//   }
// };

import { createSlice } from '@reduxjs/toolkit';

const trainsSlice = createSlice({
  name: 'trains',
  initialState: [],
  reducers: {
    fetchAll(state, action) {
      return action.payload;
    },
  },
});

export const { fetchAll } = trainsSlice.actions;
export default trainsSlice.reducer;