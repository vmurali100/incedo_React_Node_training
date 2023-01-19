import { Component } from "react";

export default class Child extends Component {
  render() {
    console.log(this.props);
    const { reactJS, topics, welcome } = this.props;
    return (
      <div>
        <button onClick={this.props.handleChange}>change Message</button>
        <h1>{welcome}</h1>
      </div>
    );
  }
}
