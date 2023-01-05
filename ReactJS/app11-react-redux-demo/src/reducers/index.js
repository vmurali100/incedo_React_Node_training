import { ADD_USER, DEL_USER, UPD_USER } from "../actions/actionTypes"

const defaultState={
    employees:[
        {fname:"mani",lname:"venkat",email:"mani@gmail.com"},
        {fname:"shashank",lname:"ravichandram",email:"shashank@gmail.com"},
        {fname:"naveen",lname:"segu",email:"naveen@gmail.com"}
    ],
}

export const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case ADD_USER:
            var newEmployee = [...state.employees];
            newEmployee.push(action.payload);
            return {...state,employees:newEmployee};
        case UPD_USER:
            var newEmployee1 = [...state.employees];
            newEmployee1.forEach((e,i)=> {
                if(e.email===action.payload.email){
                    newEmployee1[i]=action.payload;
                }
            });
            return {...state,employees:newEmployee1}
        case DEL_USER:
            var newEmployee2 = [...state.employees];
            newEmployee2=newEmployee2.filter((e)=>e.email!==action.payload.email);
            return {...state,employees:newEmployee2}
        default:
            return state;
    }
}