import { Component } from "react";
import HOCComp from "./HOCComp";

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleIncrement}>Click</button>
        <h2>You Clicked {this.props.count} Times !!</h2>
      </div>
    );
  }
}
export default HOCComp(ClickCounter);
