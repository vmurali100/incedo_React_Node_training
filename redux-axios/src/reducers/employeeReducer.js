import { GET_EMP } from "../actions/actionTypes";
import { defaultState } from "./defaultState";


export const employeeReducer = (state=defaultState, action) => {
switch(action.type){
case GET_EMP:
    return {...state, employees: action.payload};

    default:
        return state;
}
}