import axios from "axios"
import { useState } from "react"
const Data=()=>{
    const [users,setusers]=useState([])
    const handleSubmit=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
            setusers(res.data)
        })
    }
return(
    <div>
        <button onClick={handleSubmit}>Submit</button>
    </div>
)
}
export default Data