import React from 'react'
import GrandChild from './GrandChild'

const Child = () => {
  return (
    <div>
      <h2>Welcome to Child Component !!!</h2>
      <hr />
      <GrandChild />
    </div>
  )
}

export default Child