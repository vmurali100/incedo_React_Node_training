import { ADD_USER,UPDATE_USER,DELETE_USER } from "./actionTypes";

export const deleteUserAction=(emp)=>{
  return {
    type: "DELETE_USER",
    payload:emp
  }
}

export const updateUserAction=(emp)=>{
    return {
      type: "UPDATE_USER",
      payload:emp
    }
}

export const addUserAction=(emp)=>{
    return {
      type: "ADD_USER",
      payload:emp
    }
}