import { ADD_USER, DELETE_USER, UPDATE_USER} from "./actionTypes"

export const deleteEmpAction=(emp)=>{
    return {
        type:DELETE_USER,
        payload:emp
    }
}

export const addEmpAction=(empName)=>{
    return {
        type:ADD_USER,
        payload:empName
    }
}

export const updateEmpAction=(emp)=>{
    return {
        type:UPDATE_USER,
        payload:emp
    }
}