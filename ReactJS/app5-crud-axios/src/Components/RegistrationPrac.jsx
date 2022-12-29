import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import UserFormPrac from "./UserFormPrac"
import UsersTablePrac from "./UsersTablePrac"

const RegistrationPrac = () =>{
    const [user,setUser] = useState({fname:"",lname:"",email:""})
    const [users,setUsers]=useState([])
    const [editIndex, seteditIndex] = useState(null);
    const [isEdit,setIsEdit]=useState(false)
    const handleChange = (e) => {
        let newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
      };
      const deleteuser = (user) => {
        axios.delete("http://localhost:3000/users/"+user.id).then(()=>{
            getAllUsers()
        })
      };
      useEffect(()=>{
        getAllUsers()
      },[])
      const getAllUsers = () => {
        axios.get("http://localhost:3000/users").then((response) => {
          console.log(response);
          setUsers(response.data);
        });
      };
      const handleSubmit = () => {
        axios.post("http://localhost:3000/users/", user).then(() => {
          clearForm();
          getAllUsers();
        });
      };
      const updateUser = () => {
        axios.put("http://localhost:3000/users/" + user.id,user).then(()=>{
            getAllUsers()
            setIsEdit(false);
            clearForm()
        })
      };
      const editUser = (user) => {
        setUser(user);
        setIsEdit(true)
      };
      const clearForm = () => {
        setUser({ fname: "", lname: "", email: "" });
      };
    return(
        <div>
            <div className="row">
                <div className="col-4">
                    <UserFormPrac
                    user={user}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    editIndex={editIndex}
                    isEdit={isEdit}
                    updateUser={updateUser}
                    />
                </div>
                <div className="col-8">
                    <UsersTablePrac users={users}
                     deleteuser={deleteuser}
                     editUser={editUser}
                     />
                </div>
            </div>
        </div>
    )
}
export default RegistrationPrac