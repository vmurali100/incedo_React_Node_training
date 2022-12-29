import React, { Component } from "react";

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      isDisplayed :false,
      message: "Hi, this from set state",
      name: "Uvan",
      personDetails : {
        lName: "Narayanan",
        phNum: 1235648,
        email: "narayanan@gmail.com",
      },
      programmingLang : ["Python","CSS","JavaScript","HTML"],
    };
  }
  handleChange = () => {
    this.setState({isDisplayed:true, message:"This is clicked"})
  }
  render() {
    
    return <div>
        <ul>
            {this.state.programmingLang.map((val, i) => {
                return <li key={i}>{val}</li>})}
        </ul>
        <p>{this.state.message}</p>
        <button onClick={this.handleChange}></button>
        {this.setState.isDisplayed && <p>{this.setState.message}</p>}
        
        </div>

}
}

export default Hello;
