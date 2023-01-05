import { ADD_USER } from "./actionTypes";

export const addemployee = (empName) =>{

    return {
        type: ADD_USER,
        payload: empName
    }
    
}

