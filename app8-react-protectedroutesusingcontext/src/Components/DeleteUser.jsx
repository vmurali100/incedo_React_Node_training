import React,{Component} from "react";
import axios from 'axios';
import { Navigate } from "react-router-dom";

class DeleteUser extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            user:'',
            moveToReadUser:false
        }
    }

    componentDidMount()
    {
        var loc = window.location.href;
        var arr = loc.split('/');
        axios.get("http://localhost:3000/users/"+arr[4]).then(response=>{console.log(response.data);this.setState({user:response.data})});
    }

    deleteUser = ()=>{
        axios.delete("http://localhost:3000/users/"+this.state.user.id).then(response=>{
            this.setState({moveToReadUser:true});
        })
    }

    render()
    {
        return <>
               <h1>DeleteUser</h1>
               {this.state.moveToReadUser && (<Navigate to="/read" replace={true} />)}
               <table className="table">
                 <thead>
                    <tr>
                    <th>id</th>
                    <th>fname</th>
                    <th>lname</th>
                    <th>email</th>
                    <th>ConfirmDelete</th>
                    </tr>
                 </thead>
                 <tbody>
                 <tr>
                 {Object.keys(this.state.user).map((val,i)=>(<td key={i}>{this.state.user[val]}</td>))}
                 <td><button className="btn btn-danger" onClick={()=>{this.deleteUser()}}>Confirm Delete</button></td>
                 </tr>
                 </tbody>
               </table>
               </>
    };
};

export default DeleteUser;