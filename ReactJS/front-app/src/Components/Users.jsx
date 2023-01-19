import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { deleteUserAsyncAction, getAllUsersAsyncAction } from "../store/userSlice";

const Users=()=>{
       const {users} = useSelector((state)=>state.users);
       const dispatch=useDispatch();
       const navigate=useNavigate();
       useEffect(()=>{
        dispatch(getAllUsersAsyncAction());
       },[]);
       
       const editUser=(user)=>{
        navigate('/edit',{state:user})
       }
       const deleteUser=(user)=>{
          dispatch(deleteUserAsyncAction(user));
          navigate('/');
       }
       return (
          <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobileno</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,i)=>
                    <tr key={i}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.mobileno}</td>
                        <td>
                            <button className="btn btn-warning" onClick={()=>{editUser(user)}}>Edit</button>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={()=>{deleteUser(user)}}>Delete</button>
                        </td>
                    </tr>
                    )
                   }
                </tbody>
            </table>
          </div>
       );
};

export default Users;