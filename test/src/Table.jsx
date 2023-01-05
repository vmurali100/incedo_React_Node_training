import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"

const Table=()=>{
    const [user,setUser]=useState([])

    const getUsers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        console.log(response)
        setUser(response.data)
    })
    }
const displayAddress=()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        console.log(response)
        setUser(response.data)
    })
}
    var tableStyle={"border":"1px solid black"}
    return(<div>
        <button onClick={getUsers}>Display</button>
        <table className="Table" style={tableStyle}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {user.map((user,i)=> {
                    return(<tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={displayAddress}>Show Address</button>
                            <thead>
                                <tr>
                                    <th>Street</th>
                                </tr>
                                <tr>
                                    <th>Suite</th>
                                </tr>
                                <tr>
                                    <th>City</th>
                                </tr>
                                <tr>
                                    <th>ZipCode</th>
                                </tr>
                                <tr>
                                    <th>Geo</th>
                                    <thead>
                                        <tr>
                                            <th>Lat:</th>
                                        </tr>
                                        <tr>
                                            <th>Long:</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <td>
                                            {user.address.geo.lat}
                                        </td>
                                        <td>
                                            {user.address.geo.lng}
                                        </td>
                                    </tbody>
                                </tr>
                            </thead>
                        </td>
                        
                    </tr>)
                })}
            </tbody>
        </table>
    </div>)

}
export default Table;