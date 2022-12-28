import React from 'react'
import { useState } from 'react'

function FormAssignment1() {

    const [ user , setUser] = useState( {
        fname:"",
        lname:"",
        username:"",
        email:"",
        password:"",
        bio:"",

    })

    const handleChange = (e) => {
     
         const name = e.target.name;
        setUser({ ...user ,  [name]: e.target.value });

    }

    const handleSubmit = () => {
     
         console.log(user);
         setUser({
         fname:"",
        lname:"",
        username:"",
        email:"",
        password:"",
        bio:"",
         })

    }


   return (
    <div>
        
              <h1> Register </h1> 
              <form>
                 <label> First Name </label> <br />
                 <input type="text" name="fname" onChange={(e) => handleChange(e)}  value={user.fname} />

                 <br /> 
                  
                 <label> Last Name  </label> <br />
                 <input type="text" name="lname" onChange={(e) => handleChange(e)} value={user.lname}  />
                 <br /> 

                 <label> Username  </label> <br />
                 <input type="text" name="username"  onChange={(e) => handleChange(e)} value={user.username} />

                 <br /> 

                 <label> E-mail </label> <br />
                 <input type="text" name="email" onChange={(e) => handleChange(e)} value={user.email} />
                 <br /> 

                 <label>Password</label> <br />
                 <input type="text" name="password" onChange={(e) => handleChange(e)}  value={user.password} />
                 <br /> 

                 <label> Short Bio </label> <br />
                 <textarea rows={5} cols={30}  name='bio' onChange={(e) => handleChange(e)} value={user.bio}/>
                 <br />
                    <button onClick={handleSubmit} type='button'> Submit </button>
              </form>
    </div>
  )
}

export default FormAssignment1