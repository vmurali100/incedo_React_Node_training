import React from "react";
import { Component } from "react";

const HOCComp = (OriginalComponen) => {
  class NewComp extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
      console.log(props);
    }

    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      return (
        <OriginalComponen
          count={this.state.count}
          handleIncrement={this.handleIncrement}
        />
      );
    }
  }

  return NewComp;
};

export default HOCComp;