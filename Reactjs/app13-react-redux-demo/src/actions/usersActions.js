import axios from "axios"
import { GET_USERS } from "./actionTypes"
export const getAllUserAction = (dispatch) =>{
    axios.get('http://localhost:3201/users').then((res) => {
        console.log(res.json())
        return ({
            type: GET_USERS,
            payload: 
        })
    })
}