import { Component } from "react";

class Person extends Component{
    constructor(){
        super()
        this.state ={
            fname:"Nishevidhaa",
            lname:"Muralibarathy",
            Native:"Salem"
            
        };
    }
    render(){
        
        return (
            <div>
            <h3>{this.state.fname}</h3>
            <h3>{this.state.lname}</h3>
            <h3>{this.state.Native}</h3>
            </div>
        )
       
    }
    
}
export default Person