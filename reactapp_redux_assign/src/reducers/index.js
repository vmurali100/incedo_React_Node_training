import { ADD_EMP, DEL_EMP, UPDATE_EMP } from "../actions/actionTypes";

const defaultState = {
    defaultEmployee: [
        { uname: "Murali", email: "murali@gmail.com" , password:"vault"},
        { uname: "ram", email: "ram@gmail.com" ,password:"skyisblue"},
        { uname: "ravi",email: "ravi@gmail.com",password:"wearethebois" },
      ]
};

export const reducer = (state=defaultState,action)=>{

    switch(action.type){
        case ADD_EMP :
            var newemp = [...state.defaultEmployee]
            newemp.push(action.payload)

            return{...state, defaultEmployee:newemp
                
            };
        case DEL_EMP:
            return{
                ...state, defaultEmployee: state.defaultEmployee.filter((val)=>val !== action.payload)
            };
        case UPDATE_EMP:
            var newemp = [...state.defaultEmployee]
            newemp.forEach((val,i)=>{
               if(val.email==action.payload.email){
                newemp[i]=action.payload;
               }
            })
            return{
                ...state, defaultEmployee: newemp
                };
            
        default :
        return state;
    }

};