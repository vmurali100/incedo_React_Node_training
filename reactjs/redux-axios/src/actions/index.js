import { GET_USERS } from "./actionTypes";
import axios from 'axios';

export const getAllUsersAction = () => 
{

    
    return ( dispatch ) => {
   
          getUsersFromApi(dispatch);

    }
} 

const getUsersFromApi =  (dispatch) => {
  
    axios.get('https://jsonplaceholder.typicode.com/users').then( res => {

    dispatch( {

        type:GET_USERS,
        payload: res.data,
    })
    })

}



