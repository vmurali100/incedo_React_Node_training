import { GET_USERS } from "../actions/actionTypes"

const defaultState = {

    users: [],
}


export const userReducer =  (  state=defaultState , action ) => {


     switch( action.type) {

        case GET_USERS :

                     return { ...state , users: action.payload }
     }

};

