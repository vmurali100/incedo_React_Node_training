import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addUserAsyncAction, delUserAsyncAction, getAllUsersAction, updateUserAsyncAction } from '../store/slice';
const Registration = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, [dispatch]);
  const allUsers = useSelector((state) => state.users.users);

  var [user, setUser] = useState({ id: null, fname: "", lname: "", email: "" });
  var [isTrue, setIsTrue] = useState(false);

  const handleSubmit = () => {
    dispatch(addUserAsyncAction(user));
    handleClear();
  }

  const handleDeleteAsync = (user) => {
    dispatch(delUserAsyncAction(user));
  }

  const handleChange = (e) => {
    var newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  }

  const handleEdit = (user) => {
    setUser(user);
    setIsTrue(true);
  }

  const handleFinalEdit = () => {
    dispatch(updateUserAsyncAction(user));
    setIsTrue(false);
    handleClear();
  }

  const handleAdd = () => {
    dispatch(addUserAsyncAction({
      id: null, fname: "harsha", lname: "mama", email: "har@mail.com"
    }));
  }

  const handleClear = () => {
    setUser({ id: null, fname: "", lname: "", email: "" });
  }
  return (
    <div>
      <form>
        <button type='button' onClick={() => handleAdd()}>addUser</button>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
          <input type="text" name="fname" className="form-control" onChange={(e) => handleChange(e)} value={user.fname} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
          <input type="text" name="lname" className="form-control" onChange={(e) => handleChange(e)} value={user.lname} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" name="email" className="form-control" onChange={(e) => handleChange(e)} value={user.email} />
        </div>
        {isTrue ? <button type='button' onClick={() => handleFinalEdit()}>Edit</button> : <button type='button' onClick={() => handleSubmit()}>submit</button>}
      </form>
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>first name</th>
            <th>last name</th>
            <th>email</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.email}</td>
              <td><button type='button' onClick={() => handleEdit(user)}>edit</button></td>
              <td><button type='button' onClick={() => handleDeleteAsync(user)}>delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Registration
