import { ADD_USER } from "./actionTypes"

export const AddUserFunction=(emp)=>{
    return{
        type:ADD_USER,
        payload:emp
    }
}