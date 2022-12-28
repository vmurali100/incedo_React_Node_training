import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material'
import ButtonAppBar from './Appbar'

const ExForm2_func = () => {

    const [user, setUser] = useState({fname:"",lname:"",email:"",cemail:"",username:"",password:"",cpassword:""})

    const handleChange = (e) => {
        let newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }

    const register = () => {
        if(this.state.email === this.state.cemail & this.state.password === this.state.cpassword){
            console.log(this.state);
        clearAll();
        }
        else {
            alert("Email or password does not match");
            clearAll();
        }
        
      }

    const clearAll = () => {
        setUser({fname:"",lname:"",email:"",cemail:"",username:"",password:"",cpassword:""})
    }
  return (
    <div>
        <ButtonAppBar/>
        <form>
            <br/> <br/>
            <label for="fname">First name: </label>
            <input type="text" name="fname" value={user.fname}
            onChange = {(e) => {handleChange(e)}}></input> &nbsp; &nbsp;    

            <label for="lname">Last name: </label>
            <input type="text" name="lname" value={user.lname}
            onChange = {(e) => {handleChange(e)}}></input> <br/> <br/>

            <label for="username">Username: </label> <br/>
            <input type="text" name="username" value={user.username}
            onChange = {(e) => {handleChange(e)}}></input> <br/> <br/>

            <label for="email">Email: </label>
            <input type="text" name="email" value={user.email}
            onChange = {(e) => {handleChange(e)}}></input> &nbsp; &nbsp;

            <label for="cemail">Confirm Email: </label>
            <input type="text" name="cemail" value={user.cemail}
            onChange = {(e) => {handleChange(e)}}></input> <br/> <br/>

            <label for="password">Password: </label>
            <input type="text" name="password" value={user.password}
            onChange = {(e) => {handleChange(e)}}></input> &nbsp; &nbsp;

            <label for="cpassword">Confirm Password: </label>
            <input type="text" name="cpassword" value={user.cpassword}
            onChange = {(e) => {handleChange(e)}}></input> <br/> <br/>

            <Button variant="contained"  onClick={register}> Submit </Button>

        </form>

    </div>
  )
}

export default ExForm2_func