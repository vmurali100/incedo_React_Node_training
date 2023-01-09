import { DELETE_STUDENT } from "../actions/actionType";

const defaultstate ={
    students :["Nishe","Nivasini","Varsha"]
  }
export const reducer =(state = defaultstate,action) =>{
    console.log(state)
    switch(action.type){
        case DELETE_STUDENT:
            return{...state,students:state.students.filter((stud)=>stud !== action.payload)}
           
        default:
            return state

    }
}