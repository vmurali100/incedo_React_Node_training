import { REGISTER_USER } from "./ActiontTypes"

export const addUserAction=(user)=>{
    return{
        type:REGISTER_USER,
        payload:user
    }
}