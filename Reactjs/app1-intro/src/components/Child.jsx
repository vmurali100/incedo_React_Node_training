import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    const {Welcome,topics, handleChange}  =this.props;
    return (
      <div>
        <button onClick={handleChange}>Change</button>
        <p>{Welcome}</p>
        {topics.map((item,index) => (
            <h2>{item}</h2>
        ))}
      </div>
    )
  }
}
