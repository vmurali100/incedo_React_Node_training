import { Component } from "react";
import { Child } from "./Child";
export class Parent extends Component{
    constructor(){
        super()
        this.state={
            name:"sony",
            age:22,
            welcomeMessage:"Hi iam new"
        }
    }
    messageHandler=()=>{
        this.setState({welcomeMessage:"hi Iam changed"})
    }
    render(){
        return(
        <Child {...this.state} changeHandler={this.messageHandler}/>)
    }
}