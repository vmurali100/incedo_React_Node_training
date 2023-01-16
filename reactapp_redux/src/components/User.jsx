import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addUserAction } from '../actions';

 const User = () => {
    const Allusers = useSelector((state)=>state.users.users)
    const dispatch = useDispatch();
    const handleAddUser = () => {
    dispatch(addUserAction("elakkiyaa"));
    
    };
  return (
    <div>
         <button onClick={handleAddUser}>Add User</button>
        <ul>
            {Allusers.map((val,i)=>(
                <li key={i}>{val}</li>
            ))}
        </ul>

    </div>
  )
}
export default User;