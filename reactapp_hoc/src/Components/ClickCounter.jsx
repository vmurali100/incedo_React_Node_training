import React, { Component } from 'react'
import HOCComp from './HOCComp'

 class ClickCounter extends Component {
  render() {
    return (
      <div>
        <h1>You clicked {this.props.count}times!</h1>
        <button onClick={this.props.handleIncrement}>Click</button>
      </div>
    )
  }
}
export default HOCComp(ClickCounter);