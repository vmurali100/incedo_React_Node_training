import React,{Component}from "react"

class Practform1 extends Component{
    constructor(props){
        super()
        this.state={
            fname :'',
            lname:'',
            email:''
          

        }
    }
    handleChange =(e)=>{
        console.log(e.target.name)
        var inputName =e.target.name
        var newUser ={...this.state}
        newUser[inputName] =e.target.value
        this.setState(newUser)
    }
    render (){
        return(
            <div>
            <h1>My Certification preparation</h1>
            <form>
                <label>First Name :</label>
                <input type ="text" name ="fname" value ={this.state.fname} OnChange={(e)=>{this.handleChange(e)}} placeholder="Enter your first name"/><br/>
                Last Name:
                <input type ="text" name ="lname" value ={this.state.lname} OnChange={(e)=>{this.handleChange(e)}} placeholder="Enter your Last name"/><br/>
                Email:
                <input type ="text" name ="email" value ={this.state.email} OnChange ={(e)=>{this.handleChange(e)}}placeholder="Enter your email"/><br/>
                

            </form>
            </div>
        )
    }
}
export default Practform1