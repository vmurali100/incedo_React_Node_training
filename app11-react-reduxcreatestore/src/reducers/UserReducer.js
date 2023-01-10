import { ACTION_TYPES } from "../actions/ActionType";

export const defaultState = {
    registerUsers:[],
    registerUser:{},
    isEdit:false
};

const UserReducer = (state=defaultState,action)=>{
    switch(action.type)
    {
        case ACTION_TYPES.ADD_USERS:
            return {...state,registerUsers:action.payload};
        case ACTION_TYPES.ADD_USER:
            return {...state,registerUser:action.payload};
        case ACTION_TYPES.CHANGE_ISEDIT:
            return {...state,isEdit:!state.isEdit};
        case ACTION_TYPES.DELETE_USER:
            const newusers = state.registerUsers.filter((usr)=>usr.id !== action.payload)
            return {...state,registerUsers:newusers};
        case ACTION_TYPES.ADD_USER:
            return {...state,registerUser:action.payload};
        default :
            return state;
    }
};

export default UserReducer;