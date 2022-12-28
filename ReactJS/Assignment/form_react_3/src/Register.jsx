import { useState } from "react";
import { Fragment } from "react";
import { startState } from "./components/Forms";
import FunctionalForms from "./components/FunctionalComponentsForms";
import Table from "./UserTable";

function Register()
{
 
    const [users,setUsers]=useState([]);
    const [user, setUser] = useState({ ...startState });
    const [editIndex,setEditIndex]=useState(null);
    const handleChange = (e) => {
      const name = e.target.name;
      const newState = { ...user };
      newState[name] = e.target.value;
      setUser(newState);
    };
    const handleClick = function () {
      console.log("User :", user);
      const newUsers=[...users];
      newUsers.push(user);
      setUsers(newUsers)
      setUser(startState);
    };
    const handleEdit=(userEdit,i)=>
    {
       setEditIndex(i);
       setUser(userEdit);
    }
    const handleDelete=(userdelete)=>
    {
        setUsers(users.filter((user)=>user.fname!==userdelete.fname));
    }
    const updateUser=()=>
    {
      const newUsers=[...users];
      newUsers[editIndex]=user;
      setUsers(newUsers)
      setEditIndex(null);
      setUser({...startState})
    }
    return <Fragment>
        <FunctionalForms user={user} handleChange={handleChange} handleClick={handleClick} editIndex={editIndex} updateUser={updateUser}/>
        <Table users={users} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </Fragment>
}
export default Register;