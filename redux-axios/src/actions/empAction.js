import Axios from "axios"
import { GET_EMP } from "./actionTypes"


export const getAllUsersAction = () => {
    return(dispatch) => {
    getUsersAPI(dispatch)
    }
}

function getUsersAPI(dispatch){
Axios.get("http://localhost:3000/users").then((res)=>
{ console.log(res);
    dispatch({
    type: GET_EMP,
    payload: res.data
})})
}

export const deleteUserAction =(id)=>{
    return (dispatch) =>{
        Axios.delete("http://localhost:3000/users/"+id).then(()=>{
            getUsersAPI(dispatch)
        }) 
    }
}

export const updateUserAction = (employee) => {
   return (dispatch) => {
    Axios.put("http://localhost:3000/users/"+employee.id,employee).then(()=>{getUsersAPI(dispatch)})
   }
}

export const addUserAction = (employee) => {
    return(dispatch) => {
    Axios.post("http://localhost:3000/users",employee).then(()=>{
        getUsersAPI(dispatch)
    })
}
}