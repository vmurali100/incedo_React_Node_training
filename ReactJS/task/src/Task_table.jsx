import React from 'react'

export default function Task_table(props) {
    const{users, deleteuser} = props;
    console.log(props.users);

  return (
        <><h1>USERS</h1><table className='table' border={2} cellPadding={10} align='center'>
          <thead>
              <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>USERNAME</th>
                  <th>EMAIL</th>
                  <th>ADDRESS</th>
                  <th>PHONE</th>
                  <th>WEBSITE</th>
                  <th>COMPANY</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
              </tr>
          </thead>
          <tbody>
              {users.map((user, i) => <tr key={i}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td><button>Show address</button></td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td><button>Show company</button></td>
                  <td><button>Edit</button></td>
                  <td><button onClick={()=>{deleteuser(user)}}>Delete</button></td>
              </tr>)}
          </tbody>
      </table></>
  )
}










