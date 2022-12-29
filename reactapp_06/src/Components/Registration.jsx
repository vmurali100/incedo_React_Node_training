import React from "react";
import { useState } from "react";
import UserForm from "./UserForm";
import axios from "axios";
import { useEffect } from "react";
import Task from './Task';


const Registration = () => {
  const [user, setUser] = useState({ id: "", name: "", username: "" ,email: "",address: "",phone: "",website: "",company: "",});
  
  const [users, setUsers] = useState([]);
  

  // Use Effect will trigger after component Renders ... Similar to componentDidMount

  useEffect(() => {
    getAllUsers();
  }, []);
//

  const getAllUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col">
    
          <Task
            users={users}
          />

        </div>
      </div>
    </div>
  );
  };

export default Registration;