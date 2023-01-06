import { ADD_USER, DELETE_USER, UPDATE_USER } from "../actions/actionTypes";

const defaultState = {
    users : [
        {name : "Tejasree", email: "tej@gmail.com"},
        {name : "Pooja", email: "poo@gmail.com"}
    ]
};

export const reducer = (state=defaultState, action) =>{
   switch(action.type){

    case ADD_USER:
        let newUsers = [...state.users];
        newUsers.push(action.payload)
        return{
        ...state, users:newUsers
        };

    case DELETE_USER:
        return{...state, users: state.users.filter((usr,i) => usr!== (action.payload))
        };

    case UPDATE_USER:
        let newUpdatedUsers = [...state.users];
        newUpdatedUsers.forEach((usr,i)=>{
            if(usr==action.payload){
                newUpdatedUsers[i]=action.payload;
            }
        });
        return{ ...state, users:newUpdatedUsers
        };

    default:
        return state;

   }
};



