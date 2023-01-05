import React from 'react'

const UserForm = ({ user, handleChange, handleSubmit, deleteUser }) => {

    return (
        <div>
            <input
                type="text"
                name="fname"
                placeholder='First name'
                value={user.fname}
                onChange={(e) => { handleChange(e) }} />\
             <input
                type="text"
                name="lname"
                placeholder='First name'
                value={user.lname}
                onChange={(e) => { handleChange(e) }} />
             <input
                type="text"
                name="email"
                placeholder='First name'
                value={user.email}
                onChange={(e) => { handleChange(e) }} />
            <button onClick={()=>{handleSubmit()}}></button>
        </div>
    )
}

export default UserForm