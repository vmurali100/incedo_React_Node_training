import { useEffect, useState } from "react";
import { Fragment } from "react";
import { startState } from "./components/Forms";
import FunctionalForms from "./components/FunctionalComponentsForms";
import Table from "./UserTable";
import axios from 'axios';
function Register()
{
 
    const [users,setUsers]=useState([]);
    const [user, setUser] = useState({ ...startState });
    const [editIndex,setEditIndex]=useState(null);
    useEffect(()=>
    {
      getAllUsers()
    },[]);
    const getAllUsers=()=>
    {
      axios.get("http://localhost:3000/user").then((res)=>setUsers(res.data)).catch(err=>console.log('Error',err));
    }
    const handleChange = (e) => {
      const name = e.target.name;
      const newState = { ...user };
      newState[name] = e.target.value;
      setUser(newState);
    };
    const handleClick = function () {
     axios.post("http://localhost:3000/user",user).then((res)=>{console.log(res);getAllUsers()}).catch(()=>{
      console.log("testings")
     })
      setUser(startState);
    };
    const handleEdit=(userEdit,i)=>
    {
       setEditIndex(i);
       setUser(userEdit);
    }
    const handleDelete=(userdelete)=>
    {
       axios.delete("http://localhost:3000/user/"+userdelete.id).then((res)=>{console.log(res);getAllUsers();}).catch((err)=>console.log("error",err))
    }
    const updateUser=()=>
    {
      axios.put("http://localhost:3000/user/"+user.id,user).then((res)=>
     {
       console.log(res.data);
       getAllUsers();
       setUser(startState);
       setEditIndex(null);
     }).catch((err)=>console.log("error",err))
    }
    return <Fragment>
        <FunctionalForms user={user} handleChange={handleChange} handleClick={handleClick} editIndex={editIndex} updateUser={updateUser}/>
        <Table users={users} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </Fragment>
}
export default Register;