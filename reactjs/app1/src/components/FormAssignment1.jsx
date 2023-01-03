import React from 'react'
import { useState } from 'react'

function FormAssignment1() {

    const [ user , setUser] = useState( {
        fname:"",
        lname:"",
        username:"",
        email:"",
        
        bio:"",

    })

    const [editIndex , seteditIndex] = useState(null);

    const [ users ,setUsers ] = useState([]);

    const handleChange = (e) => {
     
         const name = e.target.name;
        setUser({ ...user ,  [name]: e.target.value });

    }

    const handleSubmit = () => {
     
         console.log(user);
         
          let newUsers = [...users];
          newUsers.push(user);
          setUsers(newUsers);
          setUsers(newUsers);


         console.log(users);

         setUser({
         fname:"",
        lname:"",
        username:"",
        email:"",
        
        bio:"",
         })



    }

    const handleDelete = (user) => {

        console.log(user);

        setUsers(users.filter(( u , i ) => user.fname !== u.fname));
    }

    const handleEdit = (user, i) => {

        setUser( user);
        seteditIndex( i);
    }

    const handleEditBtn = ( ) =>{
        
     let newUser = [...users]; 
     newUser[editIndex] = user;
     setUsers(newUser);
     setUser(
        {
            fname:"",
        lname:"",
        username:"",
        email:"",
        
        bio:"",

        }
     )

         
    }


   return (
    <div style={{display:"flex" , flexDirection:"row"}}> 

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

                 { editIndex==null ? 
                 
                 <button onClick={handleSubmit} type='button'> Submit </button>
                :
                   <button onClick={ handleEditBtn } type='button' > Update </button>  
                }
                    
              </form>

        </div>

        <div>

         <table style={{borderCollapse:'collapse' , textAlign:'center'}}> 

        <thead style={{  }}> 

            <tr style={{ }}>
     { Object.keys( user).map( (val , i) => {

        
        return    <th style={{ border:"1px solid black" , width:'25%' , padding:'8px'}}  key={i}> {val}  </th>
     } )}

     <th style={{ border:"1px solid black" , width:'25%' , padding:'8px'}} >  Edit </th>
     <th  style={{ border:"1px solid black" , width:'25%' , padding:'8px'} }> Delete </th>
    
        </tr>

</thead>

<tbody style={{ }}>

  
  {users.map((val , i) => {
        return(
            <tr style={{textAlign:'center'}}>
                <td style={{ border:"1px solid black" , padding:'8px'}}>  { val.fname }</td>
                <td style={{ border:"1px solid black" , padding:'8px'}}> {val.lname} </td>
                <td style={{ border:"1px solid black" , padding:'8px'}}> {val.username} </td>
                <td style={{ border:"1px solid black" , padding:'8px'}}> { val.email}</td>
                <td style={{ border:"1px solid black" , padding:'8px'}}>{val.bio} </td>
                <td  style={{cursor:'pointer' , border:"1px solid black" , padding:'8px' , backgroundColor:'gold' }} onClick={()=> handleEdit(val , i)}>  Edit </td>
                <td  style={{cursor:'pointer' , border:"1px solid black" , padding:'8px' , backgroundColor:'red'}} onClick={() => handleDelete(val)}> Delete </td>
            </tr>
        )  
            
    } )}
  
    
    </tbody> 

    </table>




        </div>
        
            
                


                
    </div>
  )
}

export default FormAssignment1