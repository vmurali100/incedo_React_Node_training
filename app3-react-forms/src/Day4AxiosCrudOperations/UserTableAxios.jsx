import React,{Component} from 'react';

class UserTableAxios extends Component{
    constructor(props)
    {
        super(props)
    };
    render()
    {
        return (
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.users.map((user,i)=> <tr key={i}>
                    <td>{user.id}</td>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.email}</td>
                    <td><button className="btn btn-warning" onClick={()=>this.props.editUser(user)}>Edit</button></td>
                    <td><button className="btn btn-danger" onClick={()=>{this.props.deleteUser(user)}}>Danger</button></td>
                  </tr> )}
                </tbody>
              </table>
            </div>
          );
    }
    
  };
  
  export default UserTableAxios;