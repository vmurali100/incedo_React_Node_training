import React from 'react'
import { Lastuser } from './Lastuser'
import { UseContextConsumer } from './Usecontext'

export const Grandchild = () => {
  return (
    <div>
        <h1>Welcome to grandchild component</h1>
        <hr/>
        <Lastuser/>
        <hr/>
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
