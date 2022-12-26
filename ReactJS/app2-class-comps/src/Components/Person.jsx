import { Component } from "react";

export class Person extends Component {
  constructor() {
    super();
    this.state = {
      fname: "Murali",
      personDetails: {
        email: "ram@gmail.com",
        city: "Bangalore",
        stte:"Karnataka",
        langulage:"Kannada"
      },
      subjects: ["HTML", "CSS", "JS", "ReactJS","NodeJS","MongoDB","Express"],
    };
  }
  render() {
    return (
      <div>
        {/* <h2>{this.state.fname}</h2>
        <h2>{this.state.personDetails.email}</h2> */}
        {/* <ul>
            {this.state.subjects.map((val,i)=>{
                return <li key={i}>{val}</li>
            })}
        </ul> */}

        <ul>
            {Object.keys(this.state.personDetails).map((val)=>{
                return <li>{this.state.personDetails[val]}</li>
            })}
        </ul>
      </div>
    );
  }
}
