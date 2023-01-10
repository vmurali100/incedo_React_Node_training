import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getRegisteredUsers,deleteRegisteredUser} from '../ReduxToolKit/registerslice';
import { addUser } from '../ReduxToolKit/registerslice';
import { useEffect } from 'react';


const ProjectTable = ()=>{
    const registeredUsers = useSelector((state)=>state.registeredusers.registerUsers);
    const dispatch = useDispatch();

    useEffect(()=>{
         dispatch(getRegisteredUsers());
    },[]);

    return <>
           <h1>The Registered users Data stored in the Database</h1>
           <table>
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>UserName</th>
                    <th>Company</th>
                    <th>Email</th>
                    <th>PhoneNumber</th>
                    <th>Subject</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {!!registeredUsers.users &&registeredUsers.users.map((user,i)=>(<tr key={i}><td>{user.userid}</td>
                                                    <td>{user.username}</td>
                                                    <td>{user.company}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.phone}</td>
                                                    <td>{user.subject}</td>
                                                    <td><button onClick={()=>dispatch(addUser(user))}>Edit</button></td>
                                                    <td><button onClick={()=>dispatch(deleteRegisteredUser(user))}>Delete</button></td></tr>))}
            </tbody>
           </table>
           </>
};

export default ProjectTable;