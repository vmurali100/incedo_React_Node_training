import { ADD_PROD, DEL_PROD, UPDATE_PROD } from "./ActionTypes"

export const addProductAction=(prod)=>{
    return{
        type: ADD_PROD,
        payload: prod
    }
}
export const delProductAction=(prod)=>{
    return{
        type: DEL_PROD,
        payload: prod
    }
}
export const updateProductAction=(prod)=>{
    return{
        type: UPDATE_PROD,
        payload: prod
    }
}