import React,{Component} from "react";
import Child from "./Child";
export default class Parent extends Component{
    constructor(props){
        super(props);

    
    this.state={
        welcome:"Welcome to ReactJs Training Sessions",
        reactJs:{
            timings:"9.30 Am",
            trainingDuration:"20Hrs"
        },
        topics:["Basics","HOC","Content API","Axios","Redux"]
    }
    }
    changeMessage=()=>{
        this.setState({welcome:"I am going to change now"})
    }
    render(){
        return <div>
            <Child {...this.state} handleChange={this.changeMessage}/>
        </div>
    }
}