import React from "react";
const Table=({users,showAddress,isEdit})=>{
    console.log(users)
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>User Name</th>
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
                    {users.map((user,i)=>
                    <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td><button className="btn btn-warning" onClick={()=>{showAddress(user,i)}}>Show Address</button></td> 
                        <div>{isEdit?user.address:null}</div>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td><button>Show Company</button></td>
                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>
)}
                </tbody>
            </table>
        </div>
    )

}
export default Table;