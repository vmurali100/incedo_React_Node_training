import React, { useEffect, useState } from 'react';
import { Funcform } from './Funcform';
import { UserTable } from './Usertable';
import axios from 'axios';

const Registration = () => {

    const[user,setUser] = useState({fname:"",lname:"",email:"",uname:"",enterpass:"",confirmpass:""});
    const[users,setUsers] = useState([]);
    const[editIndex,setEditIndex] = useState(null);

    useEffect(()=>{
        getAllUsers()
    },[])

    const handleChange = (e)=>{
        var name = e.target.name;
        var newuser = {...user};
        newuser[name] = e.target.value;
        setUser(newuser);

    };
    const handleSubmit = ()=>{
        // console.log(user);
        // let newusers = [...users];
        // newusers.push(user);
        // setUsers(newusers);
        axios.post("http://localhost:3000/users",user).then(()=>{
            console.log("user added successfully")
            clearForm();
            getAllUsers();
        })
        
    };
    const getAllUsers = ()=>{
        axios.get("http://localhost:3000/users").then((response)=>{
             console.log(response)
             setUsers(response.data);
        })
    }
    const clearForm = ()=>{
        setUser({fname:"",lname:"",email:"",uname:"",enterpass:"",confirmpass:""});
    }
    const deleteUser = (user)=>{

        
        // setUsers(users.filter((usr) => usr.fname !== user.fname));
        axios.delete("http://localhost:3000/users/"+user.id).then(()=>{

        getAllUsers();

        })

    };
    const editUser = (user,i)=>{
        setEditIndex(i);
        setUser(user);
    }
    const updateUser = ()=>{
        // var Newuser = [...users];
        // Newuser[editIndex]=user;
        // setUsers(Newuser);
        axios.put("http://localhost:3000/users/"+ user.id,user).then(()=>{
            getAllUsers();
            setEditIndex(null)
            clearForm()
        })
        setEditIndex(null)
        
    }

    return(
          <div>
            <div className="row">
                <div className="col-4">
                    <Funcform user={user} handleChange={handleChange} handleSubmit={handleSubmit} clearForm={clearForm} editIndex={editIndex} updateUser={updateUser}/>
                    </div>
                <div className="col-8">
                    <UserTable users={users} deleteUser={deleteUser} editUser={editUser}/>
                    </div>
                
            </div>
          </div>
    )
}

export default Registration;
