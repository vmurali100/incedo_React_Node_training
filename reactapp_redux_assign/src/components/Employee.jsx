import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addEmpAction, delEmpAction, updateEmpAction } from '../actions';

class Employee extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        newEmployee: {
            uname: "",
            email: "",
            password:""
          },
          editIndex: false
        
         
      }
    }
    handleChange=(e)=>{
        var newuser = {...this.state.newEmployee}
        newuser[e.target.name] = e.target.value
        this.setState({newEmployee:newuser})
    
    }
    addEmp=()=>{

        this.props.addEmployee(this.state.newEmployee);
        this.clearForm();
    }
    delEmp=(val)=>{
        this.props.delEmployee(val);

    }
    updateEmp=(val)=>{
        this.props.updateEmployee(this.state.newEmployee);

    }
    clearForm=()=>{
        this.setState({newEmployee:{
            uname: "",
            email: "",
            password:""
          }})
    }
    

    render() { 
        return (
            <div>
                <form>
                    <h1>REGISTER</h1>
                    <label htmlFor="User Name">User Name :</label>
                    <input type="text" name="uname" value={this.state.newEmployee.uname} onChange={(e)=>{this.handleChange(e)}}/>
                    <br/>
                    <label htmlFor="Email">Email :</label>
                    <input type="email" name="email"  disabled={this.state.editIndex ? true : false} value={this.state.newEmployee.email} onChange={(e)=>{this.handleChange(e)}}/>
                    <br/>
                    <label htmlFor="Password">Pasword :</label>
                    <input type="password" name="password" value={this.state.newEmployee.password} onChange={(e)=>{this.handleChange(e)}}/>
                    <br/>
                    <br/>
                    {this.state.editIndex ?(<button type="button"  onClick={this.updateEmp}>Update Employee</button> )
                    :(<button type="button"  onClick={this.addEmp}>Add Employee</button>)}
                    
                    <ul>
                        {this.props.emp.map((val,i)=>(
                        <li onClick={()=>{this.setState({newEmployee:val, editIndex: true})}}style={{margin:5,cursor:"pointer"}}
                        key={i} 
                        >
                            {val.uname} - {val.email} - {val.password}  <span style={{padding:15,color:"red"}} onClick={()=>{this.delEmp(val)}} cursor="mouse" >x</span></li>
                        ))}
                        
                    </ul>

                </form>


            </div>
        );
    }
}

function mapStateToProps(state){
    
    return{
     emp : state.defaultEmployee,
    };
   
     
}
function mapDispatchToProps(dispatch){
    return{
    addEmployee : (emp)=>{dispatch(addEmpAction(emp))},
    delEmployee : (emp)=>{dispatch(delEmpAction(emp))},
    updateEmployee : (emp)=>{dispatch(updateEmpAction(emp))}
    };
}

export default connect(mapStateToProps,mapDispatchToProps) (Employee)  ;