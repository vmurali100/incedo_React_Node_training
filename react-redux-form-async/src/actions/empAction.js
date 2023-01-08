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

export const updateUserAction = (id) => {
   return (dispatch) => {
    axios.put("http://localhost:3000/users/"+id,{
        username:"Henry",
        name:"HenryMayor",
        email:"Henry@or.com",
        stack:"Nodejs"
    }).then(()=>{getUsersAPI(dispatch)})
   }
}

export const addUserAction = () => {
    return(dispatch) => {
    axios.post("http://localhost:3000/users", {
        username:"New User",
        name:"News_User_Hello",
        email:"newuser@or.com",
        stack:"none"
    }).then(()=>{
        getUsersAPI(dispatch)
    })
}
}