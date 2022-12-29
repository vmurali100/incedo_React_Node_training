import React from 'react'
import User from './User'

const GrandChild = ({users}) => {
  return (
    <div>
      <h2>Welcome to Grand Child Component !!!</h2>
      <hr />
      <User users={users}/>
    </div>
  )
}

export default GrandChild