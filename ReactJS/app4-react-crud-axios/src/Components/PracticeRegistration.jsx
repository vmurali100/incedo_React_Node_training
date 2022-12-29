import PracticeUserForm from "./PracticeUserForm";
import PracticeUserTable from "./PracticeUserTable";
import { useState, useEffect } from "react";
import axios from "axios";
export const PracticeRegistration = () => {
  useEffect(() => {
    getAllUsers();
  }, []);
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    id: "",
  });
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log(user);
    axios.post("http://localhost:3000/users", user).then(() => {
      clearForm();
      getAllUsers();
    });
  };
  const getAllUsers = () => {
    axios.get("http://localhost:3000/users").then((res) => {
      setUsers(res.data);
    });
  };
  const deleteUser = (u) => {
    axios.delete("http://localhost:3000/users/" + u.id).then((res) => {
      getAllUsers();
    });
  };
  const editUser = (user, i) => {
    setEditIndex(i);
    axios.put("http://localhost:3000/users/" + user.id, user).then((res) => {
      setUser(res.data);
    });
  };

  const updateUser = () => {
    let newUsers = [...users];
    newUsers[editIndex] = user;
    setUsers(newUsers);
    setEditIndex(null);
  };
  const clearForm = () => {
    setUsers({
      fname: "",
      lname: "",
      email: "",
    });
  };
  return (
    <div>
      <PracticeUserForm
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        clearForm={clearForm}
        updateUser={updateUser}
        editIndex={editIndex}
      />
      <PracticeUserTable
        users={users}
        deleteUser={deleteUser}
        editUser={editUser}
      />
    </div>
  );
};
