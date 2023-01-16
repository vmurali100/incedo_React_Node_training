import { ADD_EMP, DEL_EMP, UPDATE_EMP } from "./actionTypes"

export const addEmpAction=(emp)=>{
    return{
        type:ADD_EMP,
        payload: emp

    }
}
export const delEmpAction=(emp)=>{
    return{
        type:DEL_EMP,
        payload: emp

    }
}
export const updateEmpAction=(emp)=>{
    return{
        type:UPDATE_EMP,
        payload: emp

    }
}