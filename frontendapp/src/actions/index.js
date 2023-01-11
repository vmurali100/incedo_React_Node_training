import { ADD_USER  , GET_USER} from "./actionTypes"
 import axios from 'axios';
export const addUserAction = ( user) => {

    return ( dispatch ) => {

        addUserInBackend(dispatch , user);
    }
}


export const getUserAction = ( )=> {
    return ( dispatch) => {

          getUsersFromBackend( dispatch )

    }
} 

//add user to backend

function addUserInBackend( dispatch , user ){


     const payload ={ 
        fname:'Hari',
        lname:'B',
        email:'hariharan@gmail.com',
        username:'Hariharan_012'
     }
    var formData = new FormData();
    formData.append('fname' , user.fname);
    formData.append('lname' , user.lname);
    formData.append('email' , user.email);
    formData.append('username' , user.username);
    
 
    
    axios({
        method: 'POST',
        url: 'http://localhost:8001/products/create',
        data: formData, 
        headers: {
         // 'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json'
        }, 
      }).then( res => {

        console.log( res.data);
        dispatch( {

            type: ADD_USER,
            payload: res.data,
        })
      })
}

function getUsersFromBackend( dispatch) {

    axios( {

        method:'GET',
        url:'http://localhost:8001/products',
    }).then ( res => {

        dispatch ( {

            type: GET_USER , 
            payload :res.data,
        })
    }  )
}








