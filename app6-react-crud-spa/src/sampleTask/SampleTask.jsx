import {useState,useEffect} from 'react';
import axios from 'axios';

const SampleTask = ()=>{

    const [apiData,setApiData] = useState([]);

     useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
        response.data.forEach((user)=>{
            user.showAddress = false;
            user.showCompany = false;
        })    
        setApiData(response.data);});
        console.log(apiData);
    },[]);
    const toggleAddress = (user)=>{

        const newUsers = [...apiData];
        newUsers.forEach((usr)=>{
            if(user.id === usr.id)
            {
                usr.showAddress = !usr.showAddress
            }
        })
        setApiData(newUsers);

    };
    const toggleCompany = (user)=>{
        const newUsers = [...apiData];
        newUsers.forEach((usr)=>{
            if(user.id === usr.id)
            {
                usr.showCompany = !usr.showCompany
            }
        })
        setApiData(newUsers);
    };
    const ObjectToList=(user)=>{
          return (Object.keys(user).map((val,i)=>(
             user[val]
          )));
    }
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>address</th>
                    <th>phone</th>
                    <th>website</th>
                    <th>Company</th>
                    </tr>
                    
                </thead>
                <tbody>
                {apiData.map((user,i)=> <tr key={i}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.showAddress ?<div><div><ul>{Object.keys(user.address).map((pro,i)=>(<li key={i}>{typeof user.address[pro]=='object'?JSON.stringify(user.address[pro]):user.address[pro]}</li>))}</ul></div><button className="btn btn-primary" onClick={()=>{toggleAddress(user)}}>Close Address</button> </div>:<button className="btn btn-primary" onClick={()=>{toggleAddress(user)}}>Address</button>}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>{user.showCompany ?<div><div><ul>{Object.keys(user.company).map((pro,i)=>(<li key={i}>{user.company[pro]}</li>))}</ul></div><button className="btn btn-primary" onClick={()=>{toggleCompany(user)}}>Close Company</button> </div>:<button className="btn btn-primary" onClick={()=>{toggleCompany(user)}}>Company</button>}</td>
                  </tr> )}
                </tbody>
            </table>
        </div>
    )
};

export default SampleTask;
{/* <ul>{Object.keys(user.address).map((value,i)=>{ return <li key={i}>{Object.keys(user.address[value])>1 ? Object.keys(user.address[value]).map((val,i)=>{return <li>user.address[value][val]</li>}):user.address[value]}</li>})}</ul> */}