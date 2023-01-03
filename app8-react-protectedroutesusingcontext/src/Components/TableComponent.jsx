import React,{Component} from 'react';
import axios from 'axios';

class TableComponent extends Component
{
   constructor(props)
   {
    super(props);
    this.state={
        users:[]
    }
   }
   componentDidMount()
   {
      this.getAllUsersFromServer();
   }
   getAllUsersFromServer()
   {
     axios.get("http://localhost:3000/users").then(response=>{response.data.forEach((user)=>{user.checked=false});this.setState({users:response.data})});
   }
   handleChange = (e,i)=>{
    console.log("inside change Email");
    var newUsers = [...this.state.users];
    if(e.target.name == "checked")
    {
        newUsers[i][e.target.name] = !newUsers[i][e.target.name]
    }
    else
    {
        newUsers[i][e.target.name] = e.target.value;
    }
    console.log(JSON.stringify(newUsers[i]));
    this.setState({users:newUsers})
   }

   filterList = ()=>
   {
     var newusers = [];
     this.state.users.forEach((user,i)=>{
        if(user.checked === true)
        {
           newusers.push(user);
        }
     })
     console.log(newusers);
     for(let i=0;i<newusers.length;i++)
     {
       console.log(newusers[i].id);
       axios.put("http://localhost:3000/users/"+newusers[i].id,newusers[i]);
     }
     this.getAllUsersFromServer();
   }

   render()
   {
     return <>
            <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>CheckBox</th>
              </tr>
            </thead>
            <tbody>
               {this.state.users.map((user,i)=>(<tr key={i}>
                                                <td>{user.id}</td>
                                                <td><input type="text" name="fname" defaultValue={user.fname} onChange={(e)=>{this.handleChange(e,i)}}/></td>
                                                <td><input type="text" name="lname" defaultValue={user.lname} onChange={(e)=>{this.handleChange(e,i)}}/></td>
                                                <td><input type="text" name="email" defaultValue={user.email} onChange={(e)=>{this.handleChange(e,i)}} style={{"width":"250px"}}/></td>
                                                <td><input type="checkbox" name="checked" onClick={(e)=>{this.handleChange(e,i)}}/></td>
                                                </tr>))}
            </tbody>
            </table>
            <button onClick={()=>{this.filterList()}} className="btn btn-primary">Update All</button>
            </>
   };
};

export default TableComponent;