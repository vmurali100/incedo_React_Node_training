import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAction } from '../Actions';

function ProductFunComp() {


    const productsFromStore = useSelector( ( state) => state.products);

    let dispatch = useDispatch();


    

  const [ product , setProduct] = useState( {

            id:"",
            name:"", 
            price:"",
  })

    const handleChange = (e) => {
        

        const name = e.target.name;
         
        setProduct( { ...product , [name] :e.target.value });


    }

    const handleClick = () => {

        console.log('clicked');

        console.log( product);
        dispatch( addProductAction ( product))


    }


  return (
    <div>

<div>
             
             <form> 
                            <label htmlFor='id'> ID  </label>
                            <input    type='text'  name='id'  onChange={ (e) =>  handleChange(e) } value={product.id} />

                            <label htmlFor='name'> Product Name  </label>
                            <input   type='text'  name='name'  onChange={ (e) =>  handleChange(e) }  value={product.name} />

                            <label htmlFor='price'> Product price </label>
                            <input   type='text'  name='price'   onChange={ (e) =>  handleChange(e) } value={product.price} />
                            
 
                           <button type='button' onClick={handleClick} > Add Product </button> : 
                             
                            
                             
                 
             </form>
 
  
             <ul style={{listStyleType:'none' }}>

                {productsFromStore.map ( ( product , i ) =>{ 

                 return (
                  <div  key={i}style={{ display:'flex' , flexDirection:'row' , padding:'10px' , border:'1px solid black'}}>
                    <li style={{padding:'10px'}}>{ product.id} </li>
                    <li  style={{padding:'10px'}}> {product.name} </li>
                    <li style={{padding:'10px'}}> { product.price} </li>
                    <li style={{padding:'10px'}}>  <button >  Edit </button> </li>
                    <li style={{padding:'10px'}}> <button>Delete </button></li>

                  </div>
                    // console.log(product)
                    

                 );
                } )}
             </ul>
      </div>
       

    </div>
  )
}

export default ProductFunComp