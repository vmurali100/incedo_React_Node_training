import { DELETE_USER,ADD_USER,UPDATE_USER } from "./actionType"

export const deleteEmpAction=(emp)=>{
    return {
        type:DELETE_USER,
        payload:emp
    }
}

export const addEmpAction=(emp)=>{
    return{
        type:ADD_USER,
        payload:emp
    }
}

export const updateEmpAction=(emp)=>{
    return{
        type:UPDATE_USER,
        payload:emp
    }
}