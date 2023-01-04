import {ADD_USER,DELETE_USER,UPDATE_USER} from "../actions/actionType";
  
  const defaultState = {
    users: [
    ],
  };
 
  export const reducer = (state = defaultState, action) => {
    switch (action.type) {

      case DELETE_USER:
        return {
          ...state,
          users: state.users.filter((emp) => emp !== action.payload),
        };

      case ADD_USER:
        let newEmployees = [...state.users];
        newEmployees.push(action.payload);
        return { ...state, users: newEmployees };

      case UPDATE_USER:
        let newEmployeesDetails = [...state.users];
        newEmployeesDetails.forEach((emp,i)=>{
          if(emp.email === action.payload.email){
              newEmployeesDetails[i] = action.payload
          }
        })
        return { ...state, users: newEmployeesDetails };

      default:
        return state;
    }
  };
  