import React from 'react'
import {useSelector}from 'react-redux'

export const Product = () => {
    const allProducts = useSelector((state)=>state.products.products)
  return (
    <div>

        <ul>
            {allProducts.map((val,i)=>(
                <li key={i}>{val}</li>
            ))}
        </ul>

    </div>
  )
}
