import { Component } from "react";
export class Child extends Component{
    render(){
        const {name,age}=this.props;
        console.log("props are",this.props)
        return(
            <>
           <h2> Name is {name}</h2>
           <p>Age is {this.props.age}</p>
           <button onClick={this.props.changeHandler}>Change Message</button>
           <h2>{this.props.welcomeMessage}</h2>
            </>
        )
    }
}