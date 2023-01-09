import React from 'react'

function SecondComp() {


    const [fruits, setfruits] = useState("Grapes" , "Mango" , "Cheekoo");


  return (
    <div>

       

   {fruits.map( (u) => {

    <p> {u}</p>
    } )}
    </div>
  )
}

export default SecondComp