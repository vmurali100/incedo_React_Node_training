import { ADD_STUDENT, DELETE_STD, UPDATE_STD } from "../action/actionTypes";
import {
    
  } from "../actions/actionTypes";
  
  const defaultState = {
    students: [
      { userName: "king", password: "89", email: "murali@gmail.com" },
      { userName: "ll", password: "35", email: "ram@gmail.com" },
      { userName: "ee", password: "35", email: "ravi@gmail.com" },
    ],
    products: ["Apple", "HP", "DELL", "Sony"],
  };
  
  // emmreducer
  // products
  
  // Busisness Logic condition
  export const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case DELETE_STD:
        return {
          ...state,
          employees: state.students.filter((emp) => emp !== action.payload),
        };
      case ADD_STUDENT:
        let newStudents = [...state.students];
        newStudents.push(action.payload);
        return { ...state, students: newStudents };
      case UPDATE_STD:
        let newStudentDetails = [...state.students];
        newStudentDetails.forEach((emp,i)=>{
          if(emp.email === action.payload.email){
            newStudentDetails[i] = action.payload
          }
        })
        return { ...state, students: newStudentDetails };
      default:
        return state;
    }
  };
  