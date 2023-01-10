import { ADD_USER, DEL_USER, UPD_USER } from "../actions/actionTypes"

const defaultState = {
     users:[
        {fname:"mani",lname:"venkat",email:"mani@mail.com"},
        {fname:"naveen",lname:"segu",email:"naveen@mail.com"}
     ]
}

export const reducer = (state=defaultState,action)=>{
    switch(action.type){
        case ADD_USER:
            var newData = [...state.users];
            newData.push(action.payload);
            return {...state,users:newData};
        
        case DEL_USER:
            var newData1 = [...state.users];
            newData1 = newData1.filter((user)=>user.email !== action.payload.email);
            return {...state,users:newData1};
        
        case UPD_USER:
            var newData2 = [...state.users];
            newData2.forEach((user,i)=>{
                if(user.email===action.payload.email){
                    newData2[i] = action.payload;
                }
            })
            return {...state,users:newData2};
        
        default : 
            return state;
    }
}