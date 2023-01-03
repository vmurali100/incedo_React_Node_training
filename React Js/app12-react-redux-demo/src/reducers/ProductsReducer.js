import { defaultState } from "./defaultState";

export const productsReducer = (state=defaultState,action)=>{
    switch (action.type) {
        case "value":
            
            break;
    
        default:
            return state.products
    }
}