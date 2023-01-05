import axios from 'axios'
import React, { useState, useEffect } from 'react'


export default function Form() {
  const [user, setuser] = useState({ Name: "", Email: "", Role: "" })
  const [data, setData] = useState([]);
  const[btnchg,setBtnchg]=useState(true)

  useEffect(() => {
    getAll()
  }, [user])

  const handlechange = (e) => {
    var newuser = { ...user }
    newuser[e.target.name] = e.target.value
    setuser(newuser)
  }
  // const[Name,setname]=useState("")
  // const[Email,setemail]=useState("")
  // const[Role,setrole]=useState("")
  onsubmit = () => {
    if (user.Name !== "" && user.Email !== "" && user.Role !== "") {
      axios.post("http://localhost:3000/users", user)
      getAll();
      clearform();
    }
    else{
      window.alert("empty form")
    }
  }
  const getAll = () => {
    {
    axios.get("http://localhost:3000/users").then(response => setData(response.data))
   
    }

  }
  const clearform = () => {
    setuser({ Name: "", Email: "", Role: "" })
  }
  const deleteuser = async (user) => {
    await axios.delete("http://localhost:3000/users/" + user.id)
    getAll();
  }
  const edituser=(user)=>{
    setBtnchg(false)
    setuser(user)
  }
  const updateuser=()=>{
    axios.put("http://localhost:3000/users/"+user.id,user)
    getAll();
    clearform();
    setBtnchg(true)
  }
  return (
    <div>
      <form>
        <label>NAME</label>
        <input type="text" value={user.Name} onChange={(e) => handlechange(e)} name="Name" /><br />
        <label>Email</label>
        <input type="text" value={user.Email} onChange={(e) => handlechange(e)} name="Email" /><br />
        <label>Role</label>
        <input type="text" value={user.Role} onChange={(e) => handlechange(e)} name="Role" /><br />
       { btnchg?
        <button type="button" onClick={onsubmit}>submit</button>:<button type="button" onClick={()=>updateuser()}>update</button>}
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ROLE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, i) => <tr key={i}>
            <td>{i+1}</td>
            <td>{user.Name}</td>
            <td>{user.Email}</td>
            <td>{user.Role}</td>
            <td>
              <button onClick={()=> deleteuser(user)}>delete</button>
            </td>
            <td>
              <button onClick={()=> edituser(user)}>edit</button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>

  )
}
