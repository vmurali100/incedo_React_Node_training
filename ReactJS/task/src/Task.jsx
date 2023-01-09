import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import Task_table from './Task_table';

export default function Task() {

    const [users, getUsers] = useState([]);

    const url= "https://jsonplaceholder.typicode.com/users";

    useEffect(()=>{
        getAllUsers()
        console.log(users);
      },[])

    const getAllUsers = () => {
        axios.get(`${url}`).then((response) => {
          getUsers(response.data);
        })
        .catch(error => console.error('Error: ${error}'));
      };

      //change
    const deleteuser = (user) => {
        axios.delete(`${url}`+user.id).then(()=>{
            getAllUsers()
        })
      };

  return (
        <Task_table
            users={users}
            deleteuser={deleteuser}
        />
  )
}
