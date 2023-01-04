import { ADD_EMP, DELETE_EMP, UPDATE_EMP, DELETE_USER } from "./actionTypes"

export const deleteEmpAction=(emp)=>{
    return {
        type:DELETE_EMP,
        payload:emp
    }
}
 
export const addEmpAction=(empName)=>{
    return {
        type:ADD_EMP,
        payload:empName
    }
}

export const updateEmpAction=(emp)=>{
    return {
        type:UPDATE_EMP,
        payload:emp
    }
}