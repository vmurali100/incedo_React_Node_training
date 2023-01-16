import {ADD_USER } from "./ActionTypes"

export const addUserAction=(emp)=>{
    return{
    type : ADD_USER,
    payload : emp
    }

}
