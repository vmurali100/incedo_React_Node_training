import React from 'react'
import GrandChild from './GrandChild'

const Child = ({users}) => {
  return (
    <div>
      <h2>Welcome to Child Component !!!</h2>
      <hr />
      <GrandChild users={users}/>
    </div>
  )
}

export default Child
