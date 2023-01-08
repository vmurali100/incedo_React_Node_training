import axios from "axios"
import { GET_EMP } from "./actionTypes"


export const getAllUsersAction = () => {
    return(dispatch) => {
    getUsersAPI(dispatch)
    }
}

function getUsersAPI(dispatch){
axios.get("http://localhost:3000/users").then((res)=>
{ console.log(res);
    dispatch({
    type: GET_EMP,
    payload: res.data
})})
}

export const deleteUserAction =(id)=>{
    return (dispatch) =>{
        axios.delete("http://localhost:3000/users/"+id).then(()=>{
            getUsersAPI(dispatch)
        }) 
    }
}

export const updateUserAction = (employee) => {
   return (dispatch) => {
    axios.put("http://localhost:3000/users/"+employee.id,employee).then(()=>{getUsersAPI(dispatch)})
   }
}

export const addUserAction = (employee) => {
    return(dispatch) => {
    axios.post("http://localhost:3000/users",employee).then(()=>{
        getUsersAPI(dispatch)
    })
}
}