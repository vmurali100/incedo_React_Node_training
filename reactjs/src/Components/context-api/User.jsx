import React from 'react'
import { UseContextConsumer } from './UseContext'

const User = () => {
  return (
    <div>
      <h2>Welcome to User Componenent !!!</h2>
      <UseContextConsumer>
        {(users)=>{
         return <ul>
          {users.map((user,i)=> <li key={i}>{user}</li> )}
         </ul>
        }}
      </UseContextConsumer>
    </div>
  )
}

export default User