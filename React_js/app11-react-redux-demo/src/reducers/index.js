import { ADD_EMPLOYEE, DELETE_EMP, DELETE_USER } from "../actions/actionTypes";

const defaultState = {
  employees: ["Rohan", "Arun", "Sam", "Ravi Kumar", "Ram Krishna"],
  products: ["Apple", "HP", "DELL", "Sony"],
};

// emmreducer
// products 

// Busisness Logic condition
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
    default:
      return state;
  }
};

//   An Action will return an Object like follows
//   {
//     type : DELETE_USER,
//     payload:"Arun"
//   }
