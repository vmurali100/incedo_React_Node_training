import { Component } from "react";

export class Person extends Component {
  constructor() {
    super();
    this.state = {
        isshowMessage:false,
        WelcomeMessage:
        "ReactJS Class",
      fname: "Bhargav",
      personDetails: {
        email: "bhargav@gmail.com",
        city: "Guntur",
        stte:"Andhra Pradesh",
        langulage:"Telugu"
      },
      subjects: ["HTML", "CSS", "JS", "ReactJS","NodeJS","MongoDB","Express"],
    };
  }
  showMessage=()=> {
    this.setState({WelcomeMessage:"Changed welcome message"})
  }
  render() {
    //const { WelcomeMessage }=this.state;
    return (
      <div>
        
       {/* <Child {...this.state} changeMessage={this.showMessage}>
       <button onClick={this.showMessage}>Show Message</button>
        {this.state.isshowMessage && <h2>{WelcomeMessage}</h2>}
    */}

        {/*<h2>{this.state.fname}</h2>
        <h2>{this.state.personDetails.email}</h2>
        <ul>
            {this.state.subjects.map((val,i)=>{
                return <li key={i}>{val}</li>
            })}
        </ul>
        */}
        {/*<ul>
            {Object.keys(this.state.personDetails).map((val)=>{
                return <li>{this.state.personDetails[val]}</li>
            })}
        </ul>*/}
      </div>
    );
  }
}
