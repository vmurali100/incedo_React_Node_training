import { Component } from "react";

export class Person extends Component {
  constructor() {
    super();
    this.state = {
      fname: "Mullapudi Sriganesh",
      personDetails: {
        email: "sriganesh0908@gmail.com",
        city: "Mummidivaram",
        state: "Andhra Pradesh",
        Language: "Telugu"
      },
      person :{
        fname: "Wenjie",
        lname: "Cummins",
        tel: "(758)273-9014",
        address: "4402 Tortor Rd",
        city: "Mystic",
        state: "ND",
        zip: 85584
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
        <ul>
            {Object.keys(this.state.personDetails).map((val)=>{
                return <li>{this.state.personDetails[val]}</li>
            })}
        </ul>
        <ul>
            {Object.keys(this.state.personDetails).map((val)=>{
                return <li>{this.state.personDetails[val]}</li>
            })}
        </ul>
      </div>
    );
  }
}