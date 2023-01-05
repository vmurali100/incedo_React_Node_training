import { ADD_USER, DEL_USER, UPD_USER } from "./actionTypes"

export const addUser=(emp)=>{
    return{
        type:ADD_USER,
        payload:emp
    }
}

export const delUser=(emp)=>{
    console.log(emp)
    return{
        type:DEL_USER,
        payload:emp
    }
}

export const updateUser=(emp)=>{
    console.log("update is happening", emp)
    return{
        type:UPD_USER,
        payload:emp
    }
}