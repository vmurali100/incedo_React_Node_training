import React, { Component } from 'react'
import Child from './Child';
export default class Parent extends Component {
    constructor(){
        super();
        this.state = {
            Welcome : "Welcome to react js",
            topics : ["java", "kafka", "reactjs"]

        }
    }

    handleChange= () =>{
        this.setState({Welcome : "messaged is changed"})
    }
  render() {
    return (
      <div>
        <Child Welcome = {this.state.Welcome} topics = {this.state.topics} handleChange  = {this.handleChange}/>
      </div>
    )
  }
}
