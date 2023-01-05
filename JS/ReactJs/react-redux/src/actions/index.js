import {  DELETE_EMP} from "./actionTypes"

export const deleteEmpAction=(emp)=>{
    return {
        type:DELETE_EMP,
        payload:emp
    }
}

// export const addEmpAction=(empName)=>{
//     return {
//         type:ADD_EMPLOYEE,
//         payload:empName
//     }
// }

// export const updateEmpAction=(emp)=>{
//     return {
//         type:UPDATE_EMP,
//         payload:emp
//     }
// }
// export const addUserAction=(userName)=>{
//     return {
//         type:ADD_USER,
//         payload:userName
//     }
// }