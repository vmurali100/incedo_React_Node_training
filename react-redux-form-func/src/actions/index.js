import {ADD_USER, DELETE_USER, UPDATE_USER} from './actionTypes'

export const addUsrAction = (emp) =>{
    return {
    type: ADD_USER,
    payload : emp
    }
}

export const deleteUsrAction = (emp) =>{
    return{
        type: DELETE_USER,
        payload : emp
    }
}

export const updateUsrAction = (emp) =>{
    return {
        type : UPDATE_USER,
        payload : emp
    }
}