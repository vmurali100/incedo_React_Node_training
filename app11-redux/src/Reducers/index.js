import { REGISTER_USER } from "../actions/ActiontTypes";

const defaultState={
    users:[
    ]
};

export const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case REGISTER_USER:
            let newUser=[...state.users];
            newUser.push(action.payload);
            return{...state,users:newUser};
        default:
            return state;
    }
};