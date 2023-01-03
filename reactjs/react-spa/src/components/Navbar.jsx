import React from 'react'
import { Link } from 'react-router-dom'

export default function  () {
  return (
    <div> 

        <ul style={{listStyleType:'none'}}>
            <li>
                <Link to={'/Home'}> 
                Home
                </Link>
            </li>
            <li>
            <Link to={'/products'}> 

                Products
                </Link>
            </li>

            <li>
            <Link to={'/login'}> 

                Login
                </Link>
            </li>
        </ul>
    </div>
  )
}
