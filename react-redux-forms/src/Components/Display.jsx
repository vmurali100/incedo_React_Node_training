import {useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setDeveloper} from '../Store/UserSlice';
const ReduxStateDisplay = ()=>{

    const [users,setUsers] = useState([]);
    const userDetails = useSelector((state)=>state.users.users);
    const dispatch = useDispatch();
    useEffect(()=>{
      setUsers(users);
    },[users])

    return <>
           <div className="container">
           <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
             <tbody>
                {
                  users.map((user,i)=>(<tr key={i}><td>{user.id}</td>
                                                             <td>{user.username}</td>
                                                             <td>{user.fname}</td>
                                                             <td>{user.lname}</td>
                                                             <td>{user.email}</td>
                                                             <td>{user.password}</td>
                                                            
                                                 </tr>))
                } 
             </tbody>
           </table>
           </div>
           </>
};

export default ReduxStateDisplay;