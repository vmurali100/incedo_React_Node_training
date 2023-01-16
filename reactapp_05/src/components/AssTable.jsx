
import React,{useState,useEffect} from 'react'

export const  AssTable = ({users,getUserAddress,address,closeUserAddress,showaddress}) => {
    
    // const[user,setUser] = useState({id:"",name:"",username:"",email:"",address:"",phone:"",website:"",company:""})
    // const[users,setUsers] =  useState([])

    // useEffect(()=>{
    //     getAllUsers();
    // },[])
        
//         axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
//             console.log(response.data)
//             setUsers(response.data)
// })
    
  return (
    <div>
       
        <table className="table">
            <thead>
                <tr>

                    <th>id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                    <th>Edit</th>
                    <th>Delete</th>
                
                </tr>
            </thead>
            
              
            <tbody>
            {users.map((val,i)=>
              <tr key={i}>

                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
                
                <td>
                    
                {showaddress ? <>
                <p>{JSON.stringify(val.address)}</p>
                <button  className="btn btn-primary" onClick={()=>{closeUserAddress(val)}}>hide Address </button>
                </>:<>
                <button className="btn btn-primary" onClick={getUserAddress(val)}>show Address</button></>}
              </td>
                    {/* <table>
                        <thead>
                            <tr>
                            
                                <th>street</th>
                                <th>suite</th>
                                <th>city</th>
                                <th>zipcode</th>
                                <th>geo</th>
                            </tr>
                        </thead>
                        <tbody>
                        {address.map((add,i)=>
              <tr key={i}>

                <td>{add.street}</td>
                <td>{add.suite}</td>
                <td>{add.city}</td>
                <td>{add.city}</td>
                <td>{add.zipcode}</td>
                <td>{add.geo}</td>
                </tr>
                        )}
                        </tbody>
                    </table> */}
                  
                <td>{val.phone}</td>
                <td>{val.website}</td>
                <td>
                    <button  className="btn btn-primary">Company</button>
                  
                </td>
                <td>
                    <button className="btn btn-warning">EDIT</button>
                </td>
                <td>
                    <button className="btn btn-danger">DELETE</button>
                </td>

              </tr>
            )}
            </tbody>
        </table>
    
    </div>
  )
}
