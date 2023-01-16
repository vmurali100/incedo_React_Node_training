import React from 'react'
import { useState } from 'react'
import { Child } from './Child'
import { UseContextProvider } from './Usecontext'

export const Parent = () => {
    const [user,setUser] = useState(["ravi","praga","vishal","abhi","krunal"])
  return (
    <div>
        <h1>Welcome to parent component</h1>
        <hr/>
        <UseContextProvider value={user}>
        <Child/>
        </UseContextProvider>
        
    </div>
  )
}
