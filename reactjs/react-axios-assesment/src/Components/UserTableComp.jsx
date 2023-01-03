import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

function UserTableComp() {


     const [ userData , setUserData] = useState([]);
     const [showAddress ,setShowAddress] = useState(null);
     const [ showCompany ,setShowCompany ] = useState(null);
     
    useEffect (() => {

        axios.get('https://jsonplaceholder.typicode.com/users').then( ( res) => {
            res.data.forEach(user => {

                user.showAddress  =   false;
                user.showCompany  =  false;

            } )
            setUserData(res.data)
        })

         
       console.log( userData );
        
    } , [] )

      
    const handleAddress = (user) => {
  
                let allUsers =  [...userData];

                allUsers.forEach( u => {
                    if( u. id === user.id)
                    {
                        user.showAddress = !user.showAddress;
                    }
                })

                setUserData(allUsers);
            
 
    }

    const 
    
  
    
  
  return  (
     
    <div> 

        <table>
            <thead>
                    <tr>
                        <th> ID </th>
                        <th> Name</th>
                        <th> Username </th>
                        <th> Email </th>
                        <th> Phone </th>
                        <th> Website</th>
                        <th> Address </th>
                        <th>Company </th>
                        <th> Edit </th>
                        <th> Delete</th>
                    </tr>
                     
            </thead>

            <tbody>

                {userData.map( (user , index) => {
 
      return (
                     <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{ user.username} </td>
                        <td>{user.email}</td>
                        <td> {user.phone}</td>
                        <td>{user.website}</td>
                        <td>

                            { !user.showAddress  ?   <button onClick={() => handleAddress(user)}>
                                 Show Address 
                                 </button>  :
                                 
                                 <>
                                 <p> { JSON.stringify( user.address ) }</p>
                                  <button onClick={() => handleAddress(user)}>
                                 Hide  Address 
                                 </button> 

                                 </>
                                
                                 
                                 
                                 }
                             
                                 
                        </td>
                        <td> 
                            
                        { !user.showAddress  ?   <button onClick={() => handleAddress(user)}>
                                 Show Address 
                                 </button>  :
                                 
                                 <>
                                 <p> { JSON.stringify( user.address ) }</p>
                                  <button onClick={() => handleAddress(user)}>
                                 Hide  Address 
                                 </button> 

                                 </>
                                
                                 
                                 
                                 }
                            
                             
                        </td>
                        <td> <button>  Edit  </button> </td>
                        <td> <button> Delete </button></td>
                    </tr>
      )
                }) }

                

            </tbody>
        </table>

        { 
             showAddress &&  <table>

                <thead> 
                     
                     <tr >
                        <th> Street </th>
                        <th> Suite </th>
                        < th> City </th>
                        <th> Zipcode </th>
                        <th> Lat</th>
                        <th> Lng </th>


                     </tr>


                </thead>

                <tbody>
                          
                          
                </tbody>            
                     </table>

        }
    </div>
  )

}


export default UserTableComp