import axios from "axios";
import { GET_USERS } from "./actionTypes";
export const getAllUsersAction = () => {
    return (dispatch)=>{
        handleUsersApiCall(dispatch)
    }
};

export const deleteUserAction=(id)=>{
    return (dispatch)=>{
        axios.delete("http://localhost:3201/users/"+id).then(()=>{
            handleUsersApiCall(dispatch)
        })
    }
}

function handleUsersApiCall(dispatch) {
  axios.get("http://localhost:3201/users").then((res) => {
    console.log(res);
    dispatch({
        type:GET_USERS,
        payload:res.data
    })
  });
}