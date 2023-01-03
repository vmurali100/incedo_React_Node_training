import { ADD_EMPLOYEE, DELETE_EMP, DELETE_USER } from "./actionTypes"

export const deleteEmpAction=(emp)=>{
    return {
        type:DELETE_EMP,
        payload:emp
    }
}

export const addEmpAction=(empName)=>{
    return {
        type:ADD_EMPLOYEE,
        payload:empName
    }
}