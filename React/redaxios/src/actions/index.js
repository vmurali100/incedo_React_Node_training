import { DELETE_STUDENT } from "./actionType";
 export const deleteStudentAction = (stud)=>{
    return{
        type:DELETE_STUDENT,
        payload:stud
    }
    

 }