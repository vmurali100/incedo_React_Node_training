import React from 'react'

import { useState } from 'react';



function Filter() {



    const [ searchArray ,setSearchArray ] = useState( [  "India" , "France" , "England",  "Japan" , "Chicago" , "China" , " Russia"]);

 

    const [copyArr , setCopyArr] = useState([]);

 

    const [searchTerm , setSearhSearchTerm] = useState('');

 

    const handleChange = (event) => {



        setSearhSearchTerm(event.target.value);



        let newArr = searchArray.filter( ( word , i )=> {



            return  word.includes(event.target.value);



        })



        console.log(newArr);

        setCopyArr(newArr);




    }

  return (

    <div>



                 <input type="search" placeholder='Search'  onChange={(e) => handleChange(e)} />

                 {copyArr. map( (word, i) => {



                        return (



                            <p key={i} > {word} </p>

                            );

                 })  }

    </div>

  )

}



export default Filter

