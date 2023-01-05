import { ADD_USER, DELETE_EMP, DELETE_USER } from "../actions/actionTypes"

const defaultState={
    employees:["Rohan","Arun","Sam","Ravi Kumar"],
    products:["HP","Dell"]
  }
  
  
  
  //Business logic condition
  export const reducer=(state=defaultState,action)=>{
    console.log(state)
    switch(action.type){
        case DELETE_EMP:
          // let newEmployees=[...state.employees]
          return {...state,employees:state.employees.filter((emp)=>emp !==action.payload)}  
          
        // case ADD_USER:
  
      default:
        return state
        
    }
  
  }
  