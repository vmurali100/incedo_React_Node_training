import {ADD_EMP,DELETE_EMP,UPDATE_EMP} from './actionType' 

export const addEmp = (emp)=>{
    return {
        type:ADD_EMP,
        payload:emp
    }
};

export const deleteEmp = (emp)=>{
    return {
        type:DELETE_EMP,
        payload:emp
    }
};

export const updateEmp = (emp)=>{
    return {
        type:UPDATE_EMP,
        payload:emp
    }
};