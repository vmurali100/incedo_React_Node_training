import React,{Component} from "react";
import axios from 'axios';
import {Navigate} from 'react-router-dom';

class ReadUser extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            users:[],
            navigatedeleteid:false,
            deleteId:'null',
            navigateeditid:false,
            editId:'null'
        }
    }

    componentDidMount()
    {
        axios.get("http://localhost:3000/users").then(response=>{this.setState({users:response.data})});
    }
    
    handleDelete = (id) =>
    {
       this.setState({deleteId:id});
       this.setState({navigatedeleteid:true});
       
    }

    handleEdit = (id) =>
    {
        this.setState({editId:id});
        this.setState({navigateeditid:true});
    } 

    render()
    {
        return <>
               { this.state.navigatedeleteid && (<Navigate to={"/delete/"+this.state.deleteId} replace={true} />)}
               { this.state.navigateeditid && (<Navigate to={"/update/"+this.state.editId} replace={true} />)}
               <h1>ReadUser</h1>
               <table className="table">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((user,i)=>(<tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn btn-warning" onClick={()=>{this.handleEdit(user.id)}}>Edit</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={()=>{this.handleDelete(user.id)}}>Danger</button>
                            </td>
                         </tr>)
                        
        
                         )
                     }
                </tbody>
                 </table>
               </>
    };
};

export default ReadUser;