import axios from "axios";
import { useEffect, useState } from "react";
import { Fragment } from "react";

export default function Assignment()
{
    const [users,setUsers]=useState([]);
    useEffect(()=>
    {
axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>
{
    const data=res.data.map((user)=>
    {
       return {...user,showAddress:true,showCompany:true}
      }
    )
      console.log(res.data)
      setUsers(data);
      
})
  

    },[])
  const setShowCompany=(i,bool)=>
  {
    const  newUsers=[...users];
    newUsers[i]={...newUsers[i],showCompany:bool};
    setUsers(newUsers);
    
  }
  const setShowAddress=(i,bool)=>
  {   const  newUsers=[...users];
    newUsers[i]={...newUsers[i],showAddress:bool};
    setUsers(newUsers);
  
   
  }
 
    return <Fragment>
    <table>
        <thead>
       <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Username</td>
        <td>Email</td>
        <td>Address</td>
        <td>Phone</td>
        <td>Website</td>
        <td>Company</td>
       </tr>
        </thead>
        <tbody>
         {users.map((user,i)=>
         {
            return <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.showAddress?<button onClick={(e)=>setShowAddress(i,false)}>Show Address</button>:<><p>{JSON.stringify(user.address)}</p><button onClick={(e)=>setShowAddress(i,true)}>Hide Address</button></>}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.showCompany ?<button onClick={(e)=>setShowCompany(i,false)} >Show Company</button>:<><p>{JSON.stringify(user.company)}</p><button onClick={(e)=>setShowCompany(i,true)}>Hide Company</button></>}</td>
            </tr>
         })}
        </tbody>
    </table>
    </Fragment>
}