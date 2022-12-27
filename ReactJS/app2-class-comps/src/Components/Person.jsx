import { Component } from "react";
export class Person extends Component{
    constructor(){
        super();
        this.state={
            showHandler:false,
            WelcomeMessage:"Hi Welcome",
            fname:"sony",
            personDetails:{
                email:"pragathi@gmail.com",
                age:21
            },
            subjects:["css","cpp","python"]

        }
        //this.messageHandler=this.messageHandler.bind(this)
    }
    messageHandler=()=>{
        console.log("Handler called")
        this.setState({showHandler:true})
    }
    // messageHandler(){
    //     console.log("Handler called")
    //     this.setState({showHandler:true})
    // }
    render(){
        return(
            <>
            <h2>{this.state.fname}</h2>
            <h2>{this.state.personDetails.email}</h2>
            <ul>
            {this.state.subjects.map((sub,i)=>{
                 return <li key={i}>{sub},{i}</li>
            })}
            </ul>
            <ul>
            {Object.keys(this.state.personDetails).map((data)=>{
                return <li>{data}</li>
            })}
          </ul>
          <button onClick={this.messageHandler}>Show Message</button>
         {this.state.showHandler &&(
            <h2>{this.state.WelcomeMessage}</h2>
         )}

            </>
        )
    }
}