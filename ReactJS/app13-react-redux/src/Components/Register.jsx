import React from "react";
import { useEffect } from "react";
import { useDispatch,useSelector} from "react-redux";

import { addRegisterAsyncAction,deleteRegister,getRegisterAsyncAction } from "../store/registerSlice";

const Register =()=>{
    const registerDetails = useSelector((state)=> state.register);
    const dispatch=useDispatch();
    const handleDelete=(i)=>{
        dispatch(deleteRegister(i));
    };
    useEffect(()=>{
        dispatch(getRegisterAsyncAction());
    },[]);
    const addUser=()=>{
        dispatch(
            addRegisterAsyncAction({
                id:null,
                email:"bhargav",
                username:"bhar",
                password:"1234",
            })
        );
    };
    return(
        <div className="container">
        <button onClick={addUser} className="btn btn-primary">
          Add User
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>User Name</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {registerDetails.register.map((user, i) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>
                  <button className="btn btn-warning">Edit User</button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(i);
                    }}
                  >
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
    );
}
export default Register;