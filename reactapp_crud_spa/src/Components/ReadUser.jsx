import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export const ReadUser = () => {

  const [getUser,setGetUser] = useState([]);
  const navigate = useNavigate()
  

  useEffect(()=>{

    axios.get("http://localhost:3000/user").then((response)=>{
    // console.log(response.data)
    
    setGetUser(response.data);
   
    
    
})


  },[])

  const handleEdit = (val)=>{
    navigate("/updateuser/"+val.id)
  }
  
  const handleDelete = (val)=>{
    navigate("/deleteuser/"+val.id)
  }
  
  return (
   <div>
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name </th>
          <th>Email</th>
          <th>Edit User</th>
          <th>Delete User</th>
        </tr>
      </thead>
      <tbody>
        {
          getUser.map((val,i)=>
            <tr key={i}>
              <td>{val.fname}</td>
              <td>{val.lname}</td>
              <td>{val.email}</td>
              <td>
                <button className="btn btn-warning" onClick={()=>{handleEdit(val)}}>EDIT</button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={()=>{handleDelete(val)}}>DELETE</button>
              </td>

            </tr>

          )
        }
      </tbody>
    </table>
   </div>
  )
}
