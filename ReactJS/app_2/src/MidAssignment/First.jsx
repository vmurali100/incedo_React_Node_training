import React, { Component } from 'react'

export default class First extends Component {
    constructor(props){
        super(props);
        this.state={
            array:["apple","banana","citrus","dates"],
            filter:[],
            val:""
        }
    }

    addData = (e)=>{
        this.setState({val:e.target.value})
    }
    checkData = () =>{
       this.setState({ filter : this.state.array.filter(e =>{
            return e === this.val;
        })})
    }
  render() {
    return (
      <div>
        <input type="text" onChange={(e)=>this.addData(e)} />
        <button onClick={this.checkData}>check</button>
        <p>founded a match : {this.state.filter}</p>
      </div>
    )
  }
}
