import { ADD_USER } from "../actions/actionTypes";

const defaultData = {
    users:[
        {username:"mani",email:"mani@gmail.com",password:"password",password2:"password"}
    ],
};

export const reducer =(state=defaultData,action)=>{
    switch(action.type){
        case ADD_USER:
            let newUser=[...state.users];
            newUser.push(action.payload);
            return {...state,users:newUser};
        default:
            return state;
    }
}