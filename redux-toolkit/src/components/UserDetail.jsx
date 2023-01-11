import React from 'react'
import { useState } from 'react';
import { useDispatch , useSelector} from 'react-redux'
import { addUser, deleteUser } from '../store/userSlice';
function UserDetail() {
 
    let dispatch = useDispatch();

    const usersFromStore = useSelector( (state) => state.user.users) 
  
    const [ user ,setUser ] = useState({

        firstname :"",
        lastname:"",
        username:"",
        phone:"",
        password:"",
     });


     const handleChange = (e )=> {

         const name = e.target.name;

         setUser( { ...user , [name] : e.target.value } );
     }

     const handleDelete = ( i) => {

        
     }

     const handleSubmit = () => {

        // console.log(user);
        dispatch(addUser(user));


     }


  return (
    <div>

            <form> 

                <label htmlFor='firstname'> First Name  </label>
                <input  type='text'  name='firstname'  onChange={ (e ) => handleChange(e)} />

                <br />

                <label htmlFor='lastname'  > Last Name </label>
                <input  type='text' name='lastname' onChange={ (e ) => handleChange(e)} />

                <br />

                <label htmlFor='username'  >Username</label>
                <input  type='text' name='username' onChange={ (e ) => handleChange(e)} />
                <br />

                <label htmlFor='phone'  > Phone </label>
                <input  type='text' name='phone' onChange={ (e ) => handleChange(e)} />
                <br />

                <label htmlFor='password'  >Password</label>
                <input  type='password' name='password' onChange={ (e ) => handleChange(e)}  />
                <br />

                <button type='button' onClick={handleSubmit} > Add User </button>



            </form>

            { usersFromStore.map( ( u , i) => {
                return (

                    <div  style ={{ display:'' , flexDirection:'column' }}key={i}>
                          <p >{ `First name : ${u.firstname}`}</p> 
                          <p >{ `Last name : ${u.lastname}`}</p> 
                          <p >{ `Username : ${u.username}`}</p> 
                          <p > { `Phone : ${u.phone}`} </p>                              

                        
                        </div>
                          
                );
            })}
    </div>
  )
}

export default UserDetail