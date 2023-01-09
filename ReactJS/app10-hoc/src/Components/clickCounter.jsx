import React, { Component } from 'react'
import HOCComponent from './HOCComponent'

class clickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div>
        <button type='button' onClick={()=>this.props.handleIncrement()}>add</button>
        <span>You have clicked {this.props.count} times!!</span>
      </div>
    )
  }
}

export default HOCComponent(clickCounter);