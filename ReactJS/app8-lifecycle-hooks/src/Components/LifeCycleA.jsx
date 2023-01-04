import React, { Component } from "react";

export default class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
        sample:"Hello"
    };
    console.log("LifeCycleA constructor Triggers ...!!!");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Props :-",props);
    console.log("State :-",state)
    console.log("LifeCycleA getDerivedStateFromProps Triggers ...!!!");
    return {
        addedProps:{...props,newProperty:"Hello static"},
        addedState:state
    };
  }
  render() {
    console.log("LifeCycleA render Triggers ...!!!",this.state);

    return <div>

    </div>;
  }
  componentDidMount(){
    console.log("LifeCycleA componentDidMount Triggers ...!!!");
  }
}
