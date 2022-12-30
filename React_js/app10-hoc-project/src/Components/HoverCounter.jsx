import React, { Component } from 'react'
import HOCComp from './HOCComp'

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.handleIncrement}>Hover On Me !!</h2>
        <h2>You Hovered {this.props.count} Times !!!</h2>
      </div>
    )
  }
}

export default HOCComp(HoverCounter)