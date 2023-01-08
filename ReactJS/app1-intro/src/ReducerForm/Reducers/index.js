import { ADD_EMPLOYEE,DELETE_EMP,UPDATE_EMP } from "../Actions/actionType";
  
  const defaultState = {
    employees: [
    ]
  };
  

const reducer = (state = defaultState, action) => {
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

  export default reducer;
  