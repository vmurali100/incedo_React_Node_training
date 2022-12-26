import { Component } from "react";

export class Person extends Component {
  constructor() {
    super();
    this.state = {
      fname: "Mullapudi Sriganesh",
      personDetails: {
        email: "sriganesh0908@gmail.com",
        city: "Mummidivaram",
      },
      subjects: ["HTML", "CSS", "JS", "ReactJS","NodeJS"],
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.fname}</h2>
        <h2>{this.state.personDetails.email}</h2>
        <ul>
            {this.state.subjects.map((val,i)=>{
                return <li key={i}>{val}</li>
            })
            }
        </ul>
      </div>
    );
  }
}