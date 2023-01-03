import {ADD_EMP, DELETE_EMP, UPDATE_EMP} from '../actions/actionType'

const defaultState = {
    employees:[],
    products:[]
}

const Reducer = (state=defaultState,action)=>
{
    switch(action.type)
    {
        case ADD_EMP:
            var newEmployees = [...state.employees];
            newEmployees.push(action.payload);
            return {...state,employees:newEmployees};
        case DELETE_EMP:
            return {...state,employees:state.employees.filter((emp)=>(emp  !== action.payload))};
        case UPDATE_EMP:
            var newEmployees = [...state.employees];
            newEmployees.forEach((emp,i)=>{
                if(emp.email == action.payload.email)
                {
                    console.log(i);
                    newEmployees[i] = action.payload;
                }
            })
            return {...state,employees:newEmployees}
        default:
            return state;
    }
};

export default Reducer;