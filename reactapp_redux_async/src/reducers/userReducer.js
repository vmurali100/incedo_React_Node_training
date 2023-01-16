import { defaultState } from "./defaultState";

export const userReducer = (state=defaultState,action)=>{
    switch(action.type){
        default:
            return state;
    }
    
}