import { createSlice } from '@reduxjs/toolkit';
import * as api from '../api';

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

export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(email, password);
    dispatch(loginUser(data));
  } catch (error) {
    console.log(error);
  }
};

export const logoutUserAsync = () => async (dispatch) => {
  try {
    const { data } = await api.logoutUser();
    console.log(data);
    dispatch(logout({}));
  } catch (err) {
    console.log(err);
  }
};

export const checkUser = () => async (dispatch) => {
  try {
    const { data } = await api.checkUser();
    dispatch(check(data));
  } catch (error) {
    console.log(error);
  }
};

export default userSlice.reducer;
