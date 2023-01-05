import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../actions/userActions";
import { setUser,deleteUser,addUser } from "../Slice/user";
 export default function Table ()
{
    // const [data,setData]=useState([]);
    const dispatch=useDispatch();
    const data=useSelector(state=>state.user.users);

    useEffect(()=>
    {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>
        {
            dispatch(setUser(res.data))
        })
    
    },[]);
    return<><button onClick={()=>dispatch(addUser({...data[0],id:data.length+1}))}>Add</button><ol>{data.map((d,i)=>
        {
            return <><li key={i}><>{JSON.stringify(d)}</><button onClick={()=>dispatch(deleteUser(i))}>Delete</button></li></>;
        })}</ol></>
}