import axios from "axios";
import React from "react";
import { useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

export const Registration = () => {
    const [user, setUser] = useState({ fname: "", lname: "", email: "" });
    const [users, setUsers] = useState([]);

    const handleChange = (e) => {
        var newUser = { ...user };
        newUser[e.target.name] = e.target.value
        setUser(newUser);
    }
    const clearForm=()=>{
        setUser({fname:"",lname:"",email:""
    })
    };
    const handleSubmit = () => {
        axios.post("http://localhost:3000/users", user).then(() => {
        getAllUsers();
        clearForm();
        })
    }
    const deleteUser = () => {
        axios.delete("http://localhost:3000/users", user.id).then(() => {
            getAllUsers();
            clearForm();
        })
    }
    const getAllUsers=()=>{
        axios.get("http://localhost:3000/users").then((response)=>{
            setUsers(response.data);
        })
    }
    return (
        <div>
            <UserForm
            user={user}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                deleteUser={deleteUser}/>
            <UserTable
            users={users}
            getAllUsers={getAllUsers}
            />
        </div>
    )
}
