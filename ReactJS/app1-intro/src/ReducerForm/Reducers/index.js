import {
    ADD_EMPLOYEE,
    DELETE_EMP,
    UPDATE_EMP,
  } from "../actions/actionTypes";
  
  const defaultState = {
    employees: [
      { fname: "Murali", lname: "krishna", email: "murali@gmail.com" },
      { fname: "ram", lname: "krishna", email: "ram@gmail.com" },
      { fname: "ravi", lname: "kumar", email: "ravi@gmail.com" },
    ]
  };
  

  export const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case DELETE_EMP:
        return {
          ...state,
          employees: state.employees.filter((emp) => emp !== action.payload),
        };
      case ADD_EMPLOYEE:
        let newEmployees = [...state.employees];
        newEmployees.push(action.payload);
        return { ...state, employees: newEmployees };
      case UPDATE_EMP:
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
  