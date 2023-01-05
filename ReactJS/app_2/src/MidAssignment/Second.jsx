import React, { Component } from 'react'

export default class Second extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    summer=()=>{
        this.setState({count:this.state.count+1})
    }
    subtractor=()=>{
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.summer}>add</button>
        <button onClick={this.subtractor}>minus</button>
      </div>
    )
  }
}
