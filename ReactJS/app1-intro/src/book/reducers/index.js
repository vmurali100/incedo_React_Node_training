import { combineReducers } from "redux";
import BooksReducer from "./reducer_book";
import Active from "./reducer_active_book";

const rootReducer = combineReducers({
books: BooksReducer,
activeBook: Active
});

export default rootReducer;
