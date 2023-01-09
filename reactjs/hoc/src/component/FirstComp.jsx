import React from 'react'

function FirstComp() {



    
    const [ users , setUsers ] = useState(  [ "Hari" , "gunjan", "Allakkiya"])
  


  return (
    <div>
 
    {users.map( (u) => {

        <p> {u}</p>
    } )}
    </div>
  )
}

export default FirstComp