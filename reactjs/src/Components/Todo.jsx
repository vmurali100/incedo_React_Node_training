
import React from 'react'
import { useState } from 'react'

const Todo = () => {

    const[item, setItem]=useState([]);
    const[items,setItems]=useState([]);
    const[isedit, setIsEdit]=useState(null)

const handleChange = (e)=>{
setItem([e.target.value]);
console.log(item)
}

const handleAdd = ()=>{
    
    items.push(item)
    setItems(items)
    console.log(items)
    setItem("")
}

const handleEdit = (itm,i)=>{
  setItem(itm)
  setIsEdit(i);
}

const handleDelete=(itm,i)=>{
    let newitems = [...items];
    let newusers = newitems.filter((it)=> it!==itm)
    setItems(newusers)

}

const handleUpdate = (itm)=>{
    let newitems = [...items]
    newitems[isedit]=itm;
    setItems(newitems);
    setIsEdit(null)
    setItem("")
}

  return (
    <div>
        <br/>
        <label htmlFor='entername'>Enter Item : </label>
        <input type="text" placeholder='Enter Item' value = {item} onChange={(e)=>{handleChange(e)}}></input>
        {isedit !== null ? <button onClick={()=>{handleUpdate(item)}}>Update</button>:<button onClick={handleAdd}>Add</button>
        }
        <br/>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((itm,i)=> <tr>
                        <td>{itm}</td>
                        <td><button onClick={()=>{handleEdit(itm,i)}}>Edit</button></td>
                        <td><button onClick={()=>{handleDelete(itm,i)}}>Delete</button></td>
                    </tr> )}
                </tbody>
            </table>
        </div>
    </div>

  )
}

export default Todo