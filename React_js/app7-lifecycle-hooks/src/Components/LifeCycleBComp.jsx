import React, { Component } from "react";

export default class LifeCycleBComp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("LifeCycleBComp constructor Triggered !!");
  }

  static getDerivedStateFromProps() {
    console.log("LifeCycleBComp getDerivedStateFromProps Triggered !!");
    return null;
  }
  render() {
    console.log("LifeCycleBComp render Triggered !!");

    return (
      <div>
        <h2>Count from Life Cycle A is : {this.props.count}</h2>
      </div>
    );
  }

  shouldComponentUpdate() {
    console.log("LifeCycleBComp shouldComponentUpdate Triggered !!");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("LifeCycleBComp getSnapshotBeforeUpdate Triggered !!");
    return null
  }

  componentDidUpdate() {
    console.log("LifeCycleBComp componentDidUpdate Triggered !!");
  }
  componentDidMount() {
    console.log("LifeCycleBComp componentDidMount Triggered !!");
  }
}
