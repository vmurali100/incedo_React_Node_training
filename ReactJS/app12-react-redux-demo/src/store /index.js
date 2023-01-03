import { createStore } from "redux";
import { rootReducer } from "../reducers";
import { usersReducer } from "../reducers/UsersReducer";
const store = createStore(usersReducer);

export default store