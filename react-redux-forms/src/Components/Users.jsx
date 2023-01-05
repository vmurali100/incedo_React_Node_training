import React,{Component} from 'react';
import {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getDevelopersInDbJson,postDevelopersInDbJson,updateDeveloperInDbJson} from '../Store/DeveloperSlice';

const ReduxToolKitRegister = ()=>
{
    const [employee,setEmployee] = useState({username:'',fname:'',lname:'',email:'',password:'',programinglang:''});
    console.log(employee);
    const [isEdit,setIsEdit] = useState(false);
    const dispatch = useDispatch();
    const reduxDeveloper = useSelector((state)=>state.developers.developer);
    const reduxIsEdit = useSelector((state)=>state.developers.isEdit);
    
    useEffect(()=>{
       console.log(reduxDeveloper);
       dispatch(getDevelopersInDbJson());
       setEmployee(reduxDeveloper);
       setIsEdit(reduxIsEdit);
    },[reduxDeveloper])
        
    const handleChange = (e)=>{

        var newEmp = {...employee};
        newEmp[e.target.name] = e.target.value;
        setEmployee(newEmp);
    }

    const handleSubmit = (e)=>{
       console.log("Inside handle submit");
       e.preventDefault();
       console.log("inside handle Submit");
       dispatch(postDevelopersInDbJson(employee));
       clearForm();
    }

    const clearForm = ()=>{
        setEmployee({username:'',fname:'',lname:'',email:'',password:'',programinglang:''});
    }

    // handleDelete = (emp) =>
    // {
    //    this.props.deleteEmployee(emp);
    // }
    
    const handleUpdate = () =>
    {
        dispatch(updateDeveloperInDbJson(employee));
        clearForm();
    }

    //    this.props.updateEmployee(this.state.employee);
    //    this.clearForm();
    //    this.setState({isEdit:false});
    
        return <>
               <h1>Developer Registration</h1>
               <form>
                <label htmlFor='username'>Username:</label>
                <input type="text" name="username" id="username" onChange={(e)=>{handleChange(e)}} value={employee.username}/><br/><br/>
                <label htmlFor='fname'>Firstname:</label>
                <input type="text" name="fname" id="fname" onChange={(e)=>{handleChange(e)}} value={employee.fname}/><br/><br/>
                <label htmlFor='lname'>Lastname:</label>
                <input type="text" name="lname" id="lname" onChange={(e)=>{handleChange(e)}} value={employee.lname} /><br/><br/>
                <label htmlFor='email'>Email:</label>
                <input type="text" name="email" id="email" onChange={(e)=>{handleChange(e)}} value={employee.email} disabled={isEdit}/><br/><br/>
                <label htmlFor='password'>Password:</label>
                <input type="password" name="password" id="password" onChange={(e)=>{handleChange(e)}} value={employee.password}/><br/><br/>
                <label htmlFor='programinglang'>ProgramingLang:</label>
                <select name="programinglang" id="programinglang" onChange={(e)=>{handleChange(e)}} value={employee.programinglang}>
                    <option value=''>Select the programming language</option>
                    <option value='java'>JAVA</option>
                    <option value='python'>PYTHON</option>
                    <option value='javascript'>JAVASCRIPT</option>
                </select><br/><br/>
                {isEdit?<button type="button" className="btn btn-primary" onClick={()=>handleUpdate()}>UpdateUser</button>: <button type="button" className="btn btn-primary" onClick={(e)=>{handleSubmit(e)}}>AddEmployee</button>}
               </form>
               </>
};

// const mapStateToProps = (state)=>{
//     return {employees:state.employees};
// };

// const mapDispatchToProps = (dispatch)=>
// {
//     return {
//         addusers:(emp)=>dispatch(addEmp(emp)),
//         deleteEmployee:(emp)=>dispatch(deleteEmp(emp)),
//         updateEmployee:(emp)=>dispatch(updateEmp(emp))
//     }
// };
// export default connect(mapStateToProps,mapDispatchToProps)(ReduxToolKitRegister);
{/* <select name='triggerAction' id='triggerAction' class="form-select form-select-sm" onChange={(e)=>{this.handleChange(e)}} value={this.state.triggerAction}>
                                <option>Select Below Action Triggers</option>
                                <option value="Entry is Created">Entry is Created</option>
                                <option value="Entry is updated">Entry is updated</option>
                            </select> */}
export default ReduxToolKitRegister;