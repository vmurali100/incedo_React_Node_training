import {
    ADD_USER,
    DELETE_USER,
    UPDATE_USER,
  } from "../actions/actionTypes";
  
  const defaultState = {
    employees: [
      { username: "Ram", name: "kumar", passwd: "xyz", repeat_passwd: "xyz"},
      { fname: "Sam", lname: "kumar", passwd: "xyz", repeat_passwd: "xyz" },
      { fname: "Jim", lname: "kumar", passwd: "xyz", repeat_passwd: "xyz" },
    ]
  };

  export const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case DELETE_USER:
        return {
          ...state,
          employees: state.employees.filter((emp) => emp !== action.payload),
        };
      case ADD_USER:
        let newEmployees = [...state.employees];
        newEmployees.push(action.payload);
        return { ...state, employees: newEmployees };
      case UPDATE_USER:
        let newEmployeesDetails = [...state.employees];
        newEmployeesDetails.forEach((emp,i)=>{
          if(emp.email === action.payload.email){
              newEmployeesDetails[i] = action.payload
          }
        })
        return { ...state, employees: newEmployeesDetails };
      default:
        return state;
    }
  };
