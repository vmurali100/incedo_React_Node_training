import { Fragment } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Table from "./UserTable";
import HOCCopm from "./HOCCopm";
import Hoc from "./HOCCopm";

function ReadUser(props) {
  const [users,setUsers]= useState([]);
  console.log(props);
  useEffect(() => {
    axios.get("http://localhost:3000/user").then((res)=>
    {
      setUsers(res.data);
    }).catch(err=>console.log(err));
  },[]);
  return <Fragment><Table users={users}/></Fragment>;~cd
}
export default Hoc(ReadUser);