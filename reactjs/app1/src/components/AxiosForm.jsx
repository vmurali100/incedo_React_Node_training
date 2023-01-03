import React, { useEffect, useState } from 'react'
import axios from 'axios';

function AxiosForm() {

    
    const [ user , setUser] = useState( {
        fname:"",
        lname:"",
        username:"",
        email:"",
        
        bio:"",

    })

    const [ users ,setUsers ] = useState([]);


     useEffect( () => {

            axios.get("http://localhost:3000/users").then( res => { 

             console.log( res.data);
            
            });
            
            
        
          
    } , [users])

    const handleChange = (e) => {
     
        const name = e.target.name;
       setUser({ ...user ,  [name]: e.target.value });

   }

   const handleSubmit = () => {

    axios.post('http://localhost:3000/users' , user) .then( (res) => {
 
     setUsers( [ ...users , res.data]);
     
    } )
    .catch(err => console.log( err));


     setUser({

         fname:"",
        lname:"",
        username:"",
        email:"",
        
        bio:"",


     })


    
        
   }




  return (
    <div>

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

                 {/* <label>Password</label> <br />
                 <input type="text" name="password" onChange={(e) => handleChange(e)}  value={user.password} />
                 <br /> 
 */}
                 <label> Short Bio </label> <br />
                 <textarea rows={5} cols={30}  name='bio' onChange={(e) => handleChange(e)} value={user.bio}/>
                 <br />

                 
                 
                 <button onClick={handleSubmit} type='button'> Submit </button>
                
                
                
                    
              </form>

                    
             
        </div>
    </div>
  )
}

export default AxiosForm