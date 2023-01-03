import { useState } from "react";

 const Hoc=(Original)=>
{
    return () =>
    {
        const [user,setUser]=useState({})
        console.log("test state",user)
        console.log({}.isPrototypeOf())
       return <Original sample={user} set={setUser}/>
    }
}
export default Hoc;