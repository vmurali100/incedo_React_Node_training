import { ADD_USER , GET_USER } from "../actions/actionTypes"

const defaultState = {

    users :[],
}


export const userReducer = ( state=defaultState , action) => {

    switch( action.type) {

        case ADD_USER:
           
            return { ...state , users: action.payload}


            default: return state;


    case GET_USER: 

           return { ...state , users:action.payload};
    }
    
}