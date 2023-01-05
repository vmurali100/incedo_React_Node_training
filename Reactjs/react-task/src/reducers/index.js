import { ADD_USER } from "../actions/actionTypes";

const defaultState = {
    users : [
        {username: "Amarendra", email: "chamarendra@gmail.com", pwd: "Amarendra*1", cpwd:"Amarendra*1"}
    ]
}

export const reducer = (state = defaultState, action) =>{

    switch(action.type){
        case ADD_USER:
            let newUser = this.state.users;
            newUser.push(action.payload);
            return {...state,users: newUser};
        default :
            return state;
    }
}