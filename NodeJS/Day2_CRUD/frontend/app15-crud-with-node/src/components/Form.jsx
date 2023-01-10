import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUserAction, delUserAction, updUserAction } from '../actions'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:{
            fname:"",
            lname:"",
            email:""
         },
         isTrue:false,
      }
    }

    handleSubmit=()=>{
        this.props.addUser(this.state.users);
        this.clearForm();
    }

    handleChange = (e)=>{
        var rawData = {...this.state.users};
        rawData[e.target.name] = e.target.value;
        this.setState({users:rawData});
    }

    handleEdit = (user) =>{
        this.setState({users:user,isTrue:true});
    }

    handleFinalEdit = ()=>{
        this.props.updUser(this.state.users);
        this.setState({isTrue:false});
        this.clearForm();
    }

    clearForm=()=>{
        this.setState({users:{
            fname:"",
            lname:"",
            email:""
    }});
    }
    
  render() {
    return (
      <div>
        <form action="">
            <div>
                <label htmlFor="">First name</label>
                <input type="text" name="fname" onChange={(e)=>this.handleChange(e)} value={this.state.users.fname} />
            </div>
            <div>
                <label htmlFor="">Last name</label>
                <input type="text" name="lname" onChange={(e)=>this.handleChange(e)} value={this.state.users.lname} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" name="email" disabled={this.state.isTrue} onChange={(e)=>this.handleChange(e)} value={this.state.users.email} />
            </div>
            {
                this.state.isTrue ? <button type='button' onClick={()=>this.handleFinalEdit()}>Edit</button>
                : <button type='button' onClick={()=>this.handleSubmit()}>submit</button>
             }
        </form>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>email</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.allUsers.map((user,i)=>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.email}</td>
                        <td><button type='button' onClick={()=>this.handleEdit(user)}>edit</button></td>
                        <td><button type='button' onClick={()=>this.props.delUser(user)}>delete</button></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state){
    console.log(state);
    return{
        allUsers:state.users,
    }
}

function mapDispactchToProps(dispatch){
    return{
        addUser: (user)=>dispatch(addUserAction(user)),
        delUser: (user)=>dispatch(delUserAction(user)),
        updUser: (user)=>dispatch(updUserAction(user))
    }
}

export default connect(mapStateToProps,mapDispactchToProps)(Form);
