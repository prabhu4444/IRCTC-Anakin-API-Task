// import { combineReducers } from "redux";
// import trains from "./trains";
// import user from "./user";
// import books from "./books";

// export default combineReducers({
//   trains,
//   user,
//   books,
// });
import { combineReducers } from 'redux';
import booksReducer from './booksSlice';
import trainsReducer from './trainsSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  books: booksReducer,
  trains: trainsReducer,
  user: userReducer,
});

export default rootReducer;
