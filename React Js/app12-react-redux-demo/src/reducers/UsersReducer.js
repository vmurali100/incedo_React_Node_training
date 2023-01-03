import { ADD_USER } from "../actions/actionTypes";
import { defaultState } from "./defaultState";

export const usersReducer = (state = defaultState, action) => {
    console.log("usersReducer called")
  switch (action.type) {
    case ADD_USER:
      let newUsers = [...state.users];
      newUsers.push(action.payload);

      return { ...state, users: newUsers };

    default:
      return state;
  }
};