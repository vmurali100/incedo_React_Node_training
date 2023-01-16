import { defaultState } from "./DefaultState";

export const productReducer = (state=defaultState,action)=>{
    switch(action.type){
        default:
            return state;
    }
    
}