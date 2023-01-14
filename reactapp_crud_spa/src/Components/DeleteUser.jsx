import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const DeleteUser = () => {

  const [user,setUser] = useState({})
  const params = useParams()
  const navigate = useNavigate()
  useEffect(()=>{

  axios.get("http://localhost:3000/user/"+params.id).then((response)=>{
    setUser(response.data)

  })

},[])
 

  const confirmDelete = ()=>{
    axios.delete("http://localhost:3000/user/"+params.id).then(()=>{

    navigate("/readuser")

    })
  }

  
  return (
    <div>
      

        <ul>
          <li>{user.fname}</li>
          <li>{user.lname}</li>
          <li>{user.email}</li>
        </ul>

        <button className="btn btn-danger" onClick={confirmDelete}>Confirm Delete</button>

    </div>
  )
}
