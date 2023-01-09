import React, { Component } from 'react'
import HOCComponent from './HOCComponent'

class mouseHover extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.handleIncrement}>Hover On Me !!</h2>
        <span>you have clicked {this.props.count} times!!</span>
      </div>
    )
  }
}

export default HOCComponent(mouseHover);