import React ,{Component} from 'react'
class Employees extends Component(){
        constructor(props) {
            super(props);
            this.state ={
                employee:{
                    employee:{
                        fname:"",
                        lname:"",
                        email:"",
                    },
                    

                }

            };

        }
        addEmp =() =>{
            console.log(this.state.employee);
            this.props.addEmp(this.state.employee);
            this.clearForm();
        };
        clearForm =() =>{
            this.setState({
                employee:{
                    fname:"",
                    lname:"",
                    email:"",

                },
            });
        };
    render(){

        return(
            <div>
            <h1>Redux</h1>
            <form>
                First Name :
                <input type ="text" name= "fname" value={this.state.employee.fname}/>
                Last Name:
                <input type ='text' name= 'lname' value={this.state.employee.lname}/>
                Email Id:
                <input type ='text' name= 'email' value={this.state.employee.email}/>
                <button onClick ={this.addEmp } type ='button'>Submit</button>

            </form>
            </div>
        )
    };
   
}
export default Employees