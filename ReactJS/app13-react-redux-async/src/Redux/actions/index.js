import { ADD_USER, DEL_USER, UPD_USER } from "./actionTypes"

export const addUser = (user) =>{
    return {
        type:ADD_USER,
        payload:user
    }
}

export const delUser = (user) =>{
    return {
        type:DEL_USER,
        payload:user
    }
}

export const updUser = (user) =>{
    return {
        type:UPD_USER,
        payload:user
    }
}