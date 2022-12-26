import React, { Component } from 'react'

export default class Child extends Component {
    
  render() {
    console.log(this.props)
    const {reactJS,topics,welcome} = this.props;
   
    return (
      <div>
        <button onClick={this.props.changeMessage}>Change Message</button>
        <h2>{welcome}</h2>
        <ul>
            {topics.map((sub,i)=>{
                return <li key={i}>{sub}</li>
            })}
        </ul>
      </div>
    )
  }
}