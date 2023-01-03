import React,{Component} from 'react';
import { addEmp, deleteEmp, updateEmp } from '../actions';
import { connect } from 'react-redux';

class ReduxRegister extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            employee:{fname:'',lname:'',email:''},
            isEdit:false
        }
    }
    handleChange = (e)=>{

        var newEmp = {...this.state.employee};
        newEmp[e.target.name] = e.target.value;
        this.setState({employee:newEmp});
    }

    handleSubmit = (e)=>{
       e.preventDefault();
       console.log("inside handle Submit");
       this.props.addusers(this.state.employee); 
       this.clearForm();
    }

    clearForm = ()=>{
        this.setState({employee:{fname:'',lname:'',email:''}});
    }

    handleDelete = (emp) =>
    {
       this.props.deleteEmployee(emp);
    }
    
    handleUpdate = () =>
    {
       this.props.updateEmployee(this.state.employee);
       this.clearForm();
       this.setState({isEdit:false});
    }
    render()
    {
        return <>
               <form>
                <label htmlFor='fname'>Firstname:</label>
                <input type="text" name="fname" id="fname" onChange={(e)=>{this.handleChange(e)}} value={this.state.employee.fname}/><br/><br/>
                <label htmlFor='lname'>Lastname:</label>
                <input type="text" name="lname" id="lname" onChange={(e)=>{this.handleChange(e)}} value={this.state.employee.lname} /><br/><br/>
                <label htmlFor='email'>Email:</label>
                <input type="text" name="email" id="email" onChange={(e)=>{this.handleChange(e)}} value={this.state.employee.email} disabled={this.state.isEdit}/><br/><br/>
                {this.state.isEdit?<button type="button" onClick={()=>this.handleUpdate()}>UpdateUser</button>: <button type="button" onClick={(e)=>{this.handleSubmit(e)}}>AddEmployee</button>}
               </form>
               <ol>
               {this.props.employees.map((emp,i)=>(<li key={i}><button type="button" onClick={()=>this.setState({employee:emp,isEdit:true})}>{emp.fname+" "+emp.lname+" "+emp.email}</button>{" "}<button type="button" onClick={()=>this.handleDelete(emp)}>X</button></li>))}
               </ol>
               </>
    };
};

const mapStateToProps = (state)=>{
    return {employees:state.employees};
};

const mapDispatchToProps = (dispatch)=>
{
    return {
        addusers:(emp)=>dispatch(addEmp(emp)),
        deleteEmployee:(emp)=>dispatch(deleteEmp(emp)),
        updateEmployee:(emp)=>dispatch(updateEmp(emp))
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ReduxRegister);
