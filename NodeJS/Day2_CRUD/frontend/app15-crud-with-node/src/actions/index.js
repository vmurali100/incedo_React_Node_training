import { ADD_USER, DEL_USER, UPD_USER } from "./actionTypes"

export const addUserAction = (user) =>{
    return{
        type:ADD_USER,
        payload:user
    }
}

export const delUserAction = (user) =>{
    return{
        type:DEL_USER,
        payload:user
    }
}

export const updUserAction = (user) =>{
    return{
        type:UPD_USER,
        payload:user
    }
}