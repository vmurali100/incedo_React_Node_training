import React from 'react'
import { UseContextConsumber } from './UseContext'

const User = () => {
  return (
    <div>
      <h2>Welcome to User Componenent !!!</h2>
      <UseContextConsumber>
        {(users)=>{
         return <ul>
          {users.map((user,i)=> <li key={i}>{user}</li> )}
         </ul>
        }}
      </UseContextConsumber>
    </div>
  )
}

export default User
