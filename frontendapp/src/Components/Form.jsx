import React from 'react'
import { useState } from 'react'
import { useSelector , useDispatch} from 'react-redux';
import { addUserAction, getUserAction } from '../actions';
import axios from 'axios';
import { useEffect } from 'react';
// import  {addUserAction}  from './actions/addUserAction'
function Form() {


    const getDataFromStore = useSelector( ( state) => ( state.user.users) ); 
    //  console.log(getDataFromStore)


    useEffect( () => {
  
        //   axios( {
        //     method:'GET',
        //     url:'http://localhost:8001/products'
        //   }).then((response) => { console.log( response.data)})

        dispatch(getUserAction())

    } , [])
    let dispatch = useDispatch();
    const [ user ,setUser ] = useState( {

        fname :"",
        lname:"",
        email:"",
        username:"",
        

    })

    const handleChange = (event) => {

        const name = event.target.name
       setUser({ ...user ,  [name] : event.target.value })
   }

   const handleSubmit = () => {

    dispatch( addUserAction(user) ) 

    console.log('submit')
   }
  return (
    <div>

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
                 


                 <button onClick={handleSubmit}  type='button'>Register</button>
                 </form>


                 { getDataFromStore.map( ( data , i) => {

                    return (

                        <div key={i} style={{ display:'flex' ,  flexDirection:'row' , border:'1px solid black' , margin:'10px'}}> 
                                              <p style={{padding:'10px'}}> { data.fname}</p>
                                              <p style={{padding:'10px'}}> { data.lname} </p>
                                              <p style={{padding:'10px'}}> { data.email}</p>
                                              <p style={{padding:'10px'}}> { data.username}</p>
                                              <button type='button' style={{ backgroundColor:'gold' , margin:'5px',    padding:'10px',  }}> Edit </button>
                                              <button type='button' style={{ backgroundColor:'red' ,    margin:'5px', padding:'10px',  }}> Delete </button>
                        </div>
                    );
                 })}
    </div>
  )
}

export default Form