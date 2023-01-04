import React from 'react';
import {useSelector} from 'react-redux'

const Products = () => {
    const allProducts = useSelector((state)=> state.products)
  return (
    <div>
        <ul>
             {allProducts.map((product,i)=> <li key={i}>{product}</li> )}
        </ul>
     
    </div>
  )
}

export default Products