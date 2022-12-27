import React, { Component } from 'react'

export default class Child extends Component {
  render() {

    const {name} = this.props;


    return (

      <div>

        <button onClick={ this.props.changeName}> Click </button>
        <p> {name} </p>
      </div>

    )
  }
}
