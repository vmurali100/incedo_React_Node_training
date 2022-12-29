import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";
const CreateUser = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ fname: "", lname: "", email: "", id: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    axios.post("http://localhost:3000/users", user).then((res) => {
      clearForm();
      navigate("/");
    });
  };
  const clearForm = () => {
    setUser({ fname: "", lname: "", email: "" });
  };
  return (
    <div>
      <UserForm
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
export default CreateUser;
