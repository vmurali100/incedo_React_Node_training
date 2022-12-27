import { Component } from "react";

export class Person extends Component{
   
        constructor(){
            super();
            this.state={show:false,fname:"Nibras",lname:"Ahamed",city:"CBE",sub:["eng","lang","phy","che","cse"],welcome:"Hello Nibras..!Welcome Onboard"}
        }
        greet=()=>{
            this.setState({show:true})
        }
        render(){
            return(<div>
                <button onClick={this.greet}>Welcome</button>
                
                <h2>{this.state.fname}</h2> 
                <h2>{this.state.lname}</h2>
                <h2>{this.state.city}</h2>

                <h2>{this.state.sub.map((val,i)=>{
                    return <li>{val}</li>
                })}</h2>
            </div>)
        }
}