import React,{useState} from "react";
import EmployeeTable from "./EmployeeTable";
import EmployeeForm from "./EmployeeForm";
import axios from "axios";
import { useEffect } from "react";

const EmpRegistration=()=>{
     const [Employee,setEmployee]=useState({empname:"",empcode:"",email:"",username:"",phone:"",address:"",phone:"",});
     const [Employees,setEmployees]=useState([])
     const [editIndex,setEditIndex]=useState(null)

     useEffect(()=>{
        getAllEmployees()
     },[]);

     const handleChange=(e)=>{
        var newEmployee={...Employee}
        newEmployee[e.target.name]=e.target.value;
        setEmployee(newEmployee)
     }
     const clearForm=()=>{
        setEmployee({empname:"",empcode:"",email:""})
     }
     const handleSubmit=()=>{
        axios.post("http://localhost:3000/employees",Employee).then(()=>{
            clearForm();
            getAllEmployees();
        }
        )        
     }
     const getAllEmployees=()=>{
        axios.get("http://localhost:3000/employees").then((response)=>{
            console.log(response)
            setEmployees(response.data)
        })
     }
     const deleteEmployee=(Employee)=>{
        axios.delete("http://localhost:3000/employees/"+Employee.id).then(()=>{
            getAllEmployees();
        })
     }
     const editEmployee=(Employee,i)=>{
        setEditIndex(i)
            setEmployee(Employee)
     }
     const updateUser=()=>{
        axios.put("http://localhost:3000/employees/"+Employee.id,Employee).then(()=>{
            getAllEmployees();
            setEditIndex(null)
            clearForm()
        })
     }
     return(
        <div>
            <div className="row">
                <div className="col-4">
                    <EmployeeForm Employee={Employee} handleChange={handleChange} 
                    handleSubmit={handleSubmit}
                    editIndex={editIndex}
                    updateUser={updateUser}/>
                </div>
                <div className="col-8">
                    <EmployeeTable Employees={Employees} editEmployee={editEmployee} deleteEmployee={deleteEmployee}/>
                </div>
            </div>
        </div>
     );
}

export default EmpRegistration;