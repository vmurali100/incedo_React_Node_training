import React from 'react'

const User = ({users}) => {
  return (
    <div>
      <h2>Welcome to User Componenent !!!</h2>
      <ul>
        {users.map((usr)=> <li>{usr}</li> )}
      </ul>
    </div>
  )
}

export default User
