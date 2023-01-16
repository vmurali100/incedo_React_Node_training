import { Component } from "react";
import HOCComp from "./HOCComp";

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <h1>Click Counter {this.props.count}</h1>
        <button onClick={this.props.handleIncrement}>Increment</button>
      </div>
    );
  }
}
export default HOCComp(ClickCounter);
