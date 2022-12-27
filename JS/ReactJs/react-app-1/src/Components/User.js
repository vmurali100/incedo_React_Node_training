import React from "react";
export default class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fname:"",
            lname:""
        }}
        handleChange(e){
            // console.log(e.target.value)
            // this.setState({fname:e.targer.value})
            console.log(e.target.name)
            var inputName=e.target.name
            //copy of the state
            var newUser={...this.state}
            newUser[inputName]=e.target.value
            // this.setState({...this.state,[e.target.name]:e.target.value})
        }
        addUser=()=>{
            console.log(this.state)
        }
        clearForm=()=>{
            this.setState({
                fname:"",
                lname:""
            })
        }
    render(){
        return(
            <div>
                <form>
                    <label htmlFor="First Name">First Name:</label>
                    <input type="text" name="fname" onChange={(e)=>{this.handleChange(e)}} value={this.state.fname}/><br/>
                    <label htmlFor="Last Name">Last Name:</label>
                    <input type="text" name="lname" onChange={(e)=>{this.handleChange(e)}} value={this.state.lname}/><br/>
                    <button onClick={this.addUser} type="button">Add User</button>
                </form>
            </div>
        )
    }
}