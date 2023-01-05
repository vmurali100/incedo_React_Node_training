import { ADD_PROD, DEL_PROD, UPDATE_PROD } from "../Actions/ActionTypes";

const defaultState={
    products:[{pname:"Samsung",id:"1",price:"10000"},]
}
export const productReducer=(state=defaultState,action)=>{
    switch (action.type) {
        case ADD_PROD:
            let newProdArr=[...state.products];
            newProdArr.push(action.payload)
            
            return {...state,products:newProdArr};
            break;
        case DEL_PROD:
            return {...state,products: state.products.filter((p)=>{
               return p.id !== action.payload
            })};

        case UPDATE_PROD:
            return state;

        default:
            return state;

    }
}