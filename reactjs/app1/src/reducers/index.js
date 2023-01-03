import { ADD_USER, DELETE_USER, UPDATE_USER } from "../Actions/actionTypes";

const defaultState = {

    users : [ 

        {
            username:"Hari",
            email:"Hari@gmail.com",
            password:"123",
            confirmPassword:"123",
        },
    ] ,
    
}


export const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case DELETE_USER:
        return {
          ...state,
          users: state.users.filter((u) => u !== action.payload),
        };
      case ADD_USER:
        let newUsers = [...state.users];
        newUsers.push(action.payload);
        return { ...state, users: newUsers };
      case UPDATE_USER:
        let newUserDetails = [...state.users];
        newUserDetails.forEach((user,i)=>{
          if(user.email === action.payload.email){
              newUserDetails[i] = action.payload
          }
        })
        return { ...state, users: newUserDetails };
      default:
        return state;
    }
  };
