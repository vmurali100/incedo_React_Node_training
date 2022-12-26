import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
        welcome:"Welcome to ReactJS Training Sessions !!",
        reactJS:{
            timings:"9:30 Am",
            trainignDuration:"20Hrs"
        },
        topics :["Basics","HOC","Content API","Axios","Redux"]
    };
  }

  changeMessage =()=>{
    this.setState({welcome:"I am going to Change Nw !!!!"})
  }

  render() {
    return <div>
        <Child {...this.state} changeMessage={this.changeMessage}/>
    </div>;
  }
}