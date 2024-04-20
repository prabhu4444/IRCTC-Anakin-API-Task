// export default (user = {}, action) => {
//   switch (action.type) {
//     case "LOGIN_USER":
//       return action.payload;
//     case "CHECK":
//       return action.payload;
//     case "LOGOUT":
//       return action.payload;
//     default:
//       return user;
//   }
// };

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    loginUser(state, action) {
      return action.payload;
    },
    check(state, action) {
      return action.payload;
    },
    logout(state, action) {
      return action.payload;
    },
  },
});

export const { loginUser, check, logout } = userSlice.actions;
export default userSlice.reducer;