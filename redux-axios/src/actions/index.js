import { ADD_USER, GET_USERS } from "./actionTypes"

export const addUserAction=(user)=>{
    return{
        type:ADD_USER,
        payload:user
    }
}

export const getAllUsersAction =()=>{
    return (dispatch)=>{
        getUsersFromAPI(dispatch);
    }
}
const getUsersFromAPI=(dispatch)=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
        dispatch({
            type:GET_USERS,
            payload:res.data
        })
    })
}