import axios from "axios";
export const getUsers=()=>(dispatch)=>
{
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>
    {
        dispatch( {type: "SET_USER", payload:res.data})
        // setData(res.data);
    }).catch(()=>console.log("Error"))
}