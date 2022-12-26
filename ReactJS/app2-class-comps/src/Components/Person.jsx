import { Component } from "react";

export class Person extends Component {
  constructor() {
    super();
    this.state = {
      fname: "Murali",
      personDetails: {
        email: "ram@gmail.com",
        city: "Bangalore",
      },
      subjects: ["HTML", "CSS", "JS", "ReactJS"],
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.fname}</h2>
        <h2>{this.state.personDetails.email}</h2>
      </div>
    );
  }
}
