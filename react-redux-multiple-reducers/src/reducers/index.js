import { combineReducers,createStore } from "redux";
import { productsReducer } from "./ProductsReducer";
import { usersReducer } from "./UsersReducer";
export const rootReducer = combineReducers({
  products: productsReducer,
  users: usersReducer,
});
