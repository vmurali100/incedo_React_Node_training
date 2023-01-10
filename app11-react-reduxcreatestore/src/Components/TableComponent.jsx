import React,{Component} from 'react';
import { connect } from 'react-redux';
import { deleteUser,setUser } from '../actions/Actions';

class TableComponent extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return <>
               <table className="table container">
                 <thead className="table-success">
                  <tr>
                   <th scope="col">Id</th>
                   <th scope="col">UserName</th>
                   <th scope="col">Email</th>
                   <th scope="col">FirstName</th>
                   <th scope="col">LastName</th>
                   <th scope="col">Edit</th>
                   <th scope="col">Delete</th>
                  </tr>
                 </thead>
                 <tbody>
                    {this.props.registerUsers.map((user,i)=>(<tr key={i}>
                        <th scope="row">{user.id}</th>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lasttname}</td>
                        <td><button type="button" className="btn btn-warning" onClick={()=>this.props.setuser(user)}>Edit</button></td>
                        <td><button type="button" className="btn btn-danger" onClick={()=>this.props.deleteusers(user.id)}>Delete</button></td>
                       </tr>)
                         
                    )}
                 </tbody>
               </table>
               </>
    };
};
const mapStateToProps = (state)=>{
    return {
        registerUsers:state.registerUsers,
        registerUser:state.registerUser,
        isEdit:state.isEdit
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        deleteusers:(id)=>dispatch(deleteUser(id)),
        setuser:(user)=>dispatch(setUser(user))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TableComponent);