import { ADD_USER } from "../actions/ActionTypes";
import { defaultState } from "./DefaultState";

export const userReducer = (state=defaultState,action)=>{
   
    switch(action.type){
       
            case ADD_USER:
                var newuser = [...state.users]
                newuser.push(action.payload)
                return{
                    ...state,  users: newuser
                };
                default:
            return state;
    }

}