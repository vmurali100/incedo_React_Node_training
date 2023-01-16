import React from 'react'
import { Grandchild } from './Grandchild'

export const Child = () => {
  return (
    <div>
        <h1>Welcome to Child component</h1>
        <hr/>
        <Grandchild/>
        </div>
  )
}
