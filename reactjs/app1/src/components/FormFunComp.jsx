import React, { useState } from 'react'

function FormFunComp() {


    const [ user ,setUser ] = useState( {

        fname :"",
        lname:"",
        email:"",
        username:"",
        password:"",
        confirmPassword:"",

    })

    const handleChange = (event) => {

         const name = event.target.name
        setUser({ ...user ,  [name] : event.target.value })
    }

    const handleSubmit = () => {
 
          console.log(user);
          setUser({
            fname :"",
            lname:"",
            email:"",
            username:"",
            password:"",
            confirmPassword:"",

          })
    }
  return (
    <div style={{  marginLeft:"500px"}}>

<form>
                <label> First Name:</label>
                <br />
                 <input onChange={(e) => handleChange(e)} type="text" value={user.fname}  name="fname"  />
                 <br /> <br />
                 <label> Last Name </label> <br />
                 <input onChange={(e)=> handleChange(e)}  type="text"  value={user.lname} name="lname" /> 
                 <br /> <br />
                 <label > Email</label><br />
                 <input onChange={(e)=> handleChange(e)}  type="email"  value={user.email} name="email" />
                 <br />  <br />
                 <label > Username</label><br />
                 <input onChange={(e)=> handleChange(e)}  type="text"  value={user.username} name="username" />
                 <br /> <br />
                 <label > Password</label><br />
                 <input onChange={(e)=> handleChange(e)}  type="password"  value={user.password} name="password" />
                 <br /> <br />
                 <label > Confirm Password </label><br />
                 <input onChange={(e)=> handleChange(e)}  type="password"  value={user.confirmPassword} name="confirmPassword" /> 
                 <br /><br />


                 <button onClick={handleSubmit}  type='button'>Register</button>
            </form>
    </div>
  )
}

export default FormFunComp