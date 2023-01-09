import { ADD_USER, DEL_USER, UPD_USER } from "../actions/actionTypes"

const defaultState = {
    users:[
        {fname:"mani", lname:"venkat", gender:"male"},
        {fname:"swarna", lname:"lipi", gender:"female"}
    ],
}

export const reducer = (state=defaultState,action) =>{
    switch(action.type){
        case ADD_USER:
            var newData = [...state.users];
            newData.push(action.payload);
            return {...state,users:newData};
        
        case DEL_USER:
            var newData1 = [...state.users];
            newData1 = newData1.filter((user)=> user.fname!==action.payload.fname);
            return {...state,users:newData1};
        
        case UPD_USER:
            var newData2 = [...state.users];
            newData2.forEach((user,i)=>{
                if(user.fname === action.payload.fname){
                    newData2[i] = action.payload;
                }
            })
            return {...state,users:newData2};
        default:
            return state;
    }
}