import React,{Component} from 'react';

class UserTable extends Component{
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
                    <th>First</th>
                    <th>Last</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.users.map((user,i)=> <tr key={i}>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.email}</td>
                    <td><button class="btn btn-warning" onClick={()=>this.props.editUser(user,i)}>Edit</button></td>
                    <td><button class="btn btn-danger" onClick={()=>{this.props.deleteUser(user)}}>Danger</button></td>
                  </tr> )}
                </tbody>
              </table>
            </div>
          );
    }
    
  };
  
  export default UserTable;