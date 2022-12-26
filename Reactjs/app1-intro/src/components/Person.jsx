import React, { Component } from 'react'

export default class Person extends Component {
    constructor(){
        super();
        this.state = {
            isshowMessage: false,
            Welcomemsg: "Hi This is Amarendra",
            fname: "Amarendra",
            personalDetails: {
                email: "chamarendra2000@gmail.com",
                city: "Vizag",
            },
            subjects: ["HTML", "CSS", "JS", "ReactJs"]
        };
    }

    showMessage = ()=> {
        this.setState({isshowMessage : true});
    }
    
  render() {

    const {Welcomemsg} = this.state;
    return (
      <div>
        {/* <h2>{this.state.fname}</h2>
        {Object.keys(this.state.personalDetails).map((item, index) => (
            <h2>{this.state.personalDetails[item]}</h2>
        ))}
        {this.state.subjects.map((item, index) => (
            <h2 key = {index}>{item}</h2>

        ))} */}

        <button onClick={this.showMessage}>Click</button>
        {this.state.isshowMessage && <h2>{Welcomemsg}</h2>}
      </div>
    )
  }
}
