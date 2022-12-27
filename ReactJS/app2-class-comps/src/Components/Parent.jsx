import { Component } from "react";
import Child from "./Child";

export class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: "Hi Welcome to Incedeo ReactJS And NodeJS Training !!",
      reactJS: {
        timings: "9:30 Am",
        trainingDuration: "20Hrs",
      },
      topics: ["Bascis", "Axios"],
    };
  }
  changeMessage = () => {
    this.setState({ welcome: "Change now" });
  };
  render() {
    return (
      <div>
        <Child {...this.state} handleChange={this.changeMessage} />
      </div>
    );
  }
}
