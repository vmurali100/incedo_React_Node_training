import React, {Component, useState} from 'react'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addUsrAction, deleteUsrAction, updateUsrAction } from '../actions'

const Employees = () =>{
    const [user, setUser] = useState({name:"", email:"", tech:""})
    const[isEdit, setIsdit] = useState(false);

    const userDetails = useSelector((state) => state.users);
    const dispatch = useDispatch();
    console.log("userdetails are: ", userDetails)

const handleChange = (e) => {
let newUser = {...user}
newUser[e.target.name] = e.target.value;
setUser(newUser)
console.log(user)
}

const handleEdit = (usr) =>{
 setUser(usr)
 setIsdit(true)
}

const addUser = () =>{
    console.log(user)
    dispatch(addUsrAction(user))
    clearForm();
}

const editUser = ()=>{
    console.log("edited user", user)
    dispatch(updateUsrAction(user))
    clearForm();
}

const deleteUser = (usr)=>{
    console.log("deleted user", usr)
    dispatch(deleteUsrAction(usr))
}

const clearForm = ()=>{
    setUser({name:"", email:"", tech:""})
}

    return (
        <div>
            <form action="">
                <label htmlFor="name">Name : </label>
                <input type="text" name="name" value={user.name} onChange={(e)=>{handleChange(e)}} disabled={isEdit? true:false}></input> <br />
                <label htmlFor="email">Email : </label>
                <input type="text" name="email" value={user.email} onChange={(e)=>{handleChange(e)}}></input> <br />
                <label htmlFor="tech">Tech Stack : </label>
                <select name="tech" value={user.tech} onChange={(e)=>{handleChange(e)}}>
                <option value="">Choose Tech Stack</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                </select> <br />
                {isEdit ? (<button type="button" onClick={()=>{editUser()}}>Update User</button>):
                (<button type="button" onClick={addUser}>Register</button>)}
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Tech Stack</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                        {userDetails.map((usr,i)=> <tr key={i}>
                                <td>{usr.name}</td>
                                <td>{usr.email}</td>
                                <td>{usr.tech}</td>
                                <td><button onClick={()=>{handleEdit(usr)}}>Edit</button></td>
                                <td><button onClick={()=>{deleteUser(usr)}}>Delete</button></td>
                            </tr>)
                        }
                </tbody>
            </table>
        </div>
    )
}

export default Employees