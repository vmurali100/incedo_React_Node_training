import React from "react";
import { useState } from "react";
import axios from "axios";
import UserTable from "./UsersTable";
import { useEffect } from "react";

const Home = () => {
  const [user, setUser] = useState({id:"",name:"",username:"",address:"",phone:"",website:"",company:""});
  const [Address, setAddress] = useState({address:""});
  const [Company, setCompany] = useState({company:""});
  const [users, setUsers] = useState([]);


  useEffect(()=>{
    getAllUsers()
  },[])



  const getAllUsers = () => {
    axios.get("http://localhost:3000/users").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  };

  const showAddress = (user) => {
    axios.get("http://localhost:3000/users/"+user.id).then(()=>{
        setAddress(user.address);
        console.log(user.address)
    })
  };
  const showCompany = (user) => {
    axios.put("http://localhost:3000/users/"+user.id).then(()=>{
        setCompany(user.company);
        console.log(user.company);
    })
  };
  return (
    <div>
      <div className="row">
        <div>
          <UserTable
            users={users}
            showAddress={showAddress}
            showCompany={showCompany}
            address={Address}
            company={Company}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;