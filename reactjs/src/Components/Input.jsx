import React, { Component } from 'react'

export default class Input extends Component {
    constructor(){

    super();
    this.state = {
    fname: " "
    }
    }

    handleChange=(e)=>{
    console.log(e);
    this.setState({fname:e.target.value})
    }

  render() {
    return (
      <div>
        <form>
            <label>Enter name :</label>
            <input type="text" onChange={(e)=>this.handleChange(e)} value={this.state.fname}></input>
            <button >Click</button>
        </form>
      </div>
    )
  }
}
