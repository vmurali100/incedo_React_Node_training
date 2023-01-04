import { ADD_STUDENT, UPDATE_STD } from "./actionTypes"

export const deleteStdAction=(emp)=>{
    return {
        type:DELETE_STD,
        payload:std
    }
}

export const addStdAction=(stdName)=>{
    return {
        type:ADD_STUDENT,
        payload:stdName
    }
}

export const updateStdAction=(std)=>{
    return {
        type:UPDATE_STD,
        payload:std
    }
}