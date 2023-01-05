import {useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { deleteDeveloperInDbJson , setDeveloper} from '../Store/DeveloperSlice';
const ReduxStateDisplay = ()=>{

    const [developers,setDevelopers] = useState([]);
    const reduxState = useSelector((state)=>state.developers.developers);
    const dispatch = useDispatch();
    useEffect(()=>{
      setDevelopers(reduxState);
    },[reduxState])

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
                    <th>ProgrammingLanguage</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
             <tbody>
                {
                  developers.map((developer,i)=>(<tr key={i}><td>{developer.id}</td>
                                                             <td>{developer.username}</td>
                                                             <td>{developer.fname}</td>
                                                             <td>{developer.lname}</td>
                                                             <td>{developer.email}</td>
                                                             <td>{developer.password}</td>
                                                             <td>{developer.programinglang}</td>
                                                             <td><button type="button"  onClick={()=>{dispatch(setDeveloper(developer))}}className="btn btn-warning">Edit</button></td>
                                                             <td><button type="button"  onClick={()=>{dispatch(deleteDeveloperInDbJson(developer.id))}} className="btn btn-danger">Delete</button></td>
                                                 </tr>))
                } 
             </tbody>
           </table>
           </div>
           </>
};

export default ReduxStateDisplay;