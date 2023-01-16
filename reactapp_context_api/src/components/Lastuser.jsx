import React from 'react'
import { UseContextConsumer } from './Usecontext'

export const Lastuser = () => {
  return (
    <div>
        <h1>Welcome to lateuser</h1>

        <UseContextConsumer>
       
            {(users)=>{
                return <ul>
                    {users.map((val,i)=>
                    <li key={i}>{val}</li>
                    
                    )}
                </ul>
            }}

            
        </UseContextConsumer>
        
    </div>
  )
}
