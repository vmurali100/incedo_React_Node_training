import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';

const ExForm1_func = () => {
    
    const [user, setUser] = useState({fname:"",lname:"",email:"",username:"",password:"",bio:""});

    const handleChange = (e) => {
        let newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }

    const register = () => {
        console.log(user);
        clearAll();
    }

    const clearAll = () => {
        setUser({fname:"",lname:"",email:"",username:"",password:"",bio:""})
    }

  return (
    <div>
        <h1> Register </h1>
        <form>
            <label for="fname">First name: </label>
            <input type="text" name="fname" value={user.fname}
            onChange = {(e) => {handleChange(e)}}></input> &nbsp; &nbsp;    

            <label for="lname">Last name: </label>
            <input type="text" name="lname" value={user.lname}
            onChange = {(e) => {handleChange(e)}}></input> <br/> <br/>

            <label for="username">Username: </label> <br/>
            <input type="text" name="username" value={user.username}
            onChange = {(e) => {handleChange(e)}}></input> <br/> <br/>

            <label for="username">Email: </label> <br/>
            <input type="text" name="email" value={user.email}
            onChange = {(e) => {handleChange(e)}}></input> <br/> <br/>

            <label for="password">Password: </label> <br/>
            <input type="text" name="password" value={user.password}
            onChange = {(e) => {handleChange(e)}}></input> <br/> <br/>

            <label for="bio">Write a short bio: </label> <br/>
            <input type="textarea" name="bio" value={user.bio}
            onChange = {(e) => {handleChange(e)}}></input> <br/>
            {"Write a short bio about yourself"} <br/> <br/>

            <Button onClick={register} variant="contained" color="error">Submit</Button>

        </form>
    </div>
  )
}

export default ExForm1_func