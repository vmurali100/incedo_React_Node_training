import React, { Component } from 'react'
import HOCComp from './HOCComp'

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.handleIncrement}>Hover on me</h1>
        <h1>You hovered {this.props.count}times!</h1>
      </div>
    )
  }
}
export default HOCComp(HoverCounter);