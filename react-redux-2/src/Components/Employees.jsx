import React, {Component, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addUsrAction, deleteUsrAction, updateUsrAction } from '../actions'

const Employees = () =>{
    const [user, setUser] = useState({name:"", email:""})
    const userDetails = useSelector((state) => state.users);
    const dispatch = useDispatch();
    console.log("userdetails are: ", userDetails)

const handleChange = (e) => {
let newUser = {...user}
newUser[e.target.name] = e.target.value;
setUser(newUser)
console.log(user)
}

const addUser = () =>{
    console.log(user)
    dispatch(addUsrAction(user))
}

    return (
        <div>
            <form action="">
                <label htmlFor="name">Name : </label>
                <input type="text" name="name" value={user.name} onChange={(e)=>{handleChange(e)}}></input> <br />
                <label htmlFor="email">Email : </label>
                <input type="text" name="email" value={user.email} onChange={(e)=>{handleChange(e)}}></input> <br />
                <button type="button" onClick={addUser}>Register</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                        {userDetails.map((usr,i)=> <tr key={i}>
                                <td>{usr.name}</td>
                                <td>{usr.email}</td>
                            </tr>)
                        }
                </tbody>
            </table>
        </div>
    )
}

export default Employees