import { Component } from "react";

export class Person extends Component {
  constructor() {
    super();
    this.state = {
      isShowMesagge: false,
      WelcomeMessage:
        "Hi All ... Welcome to Incedeo ReactJS And NodeJS Training !!",
      personDetails: {
        email: "ram@gmail.com",
        city: "Bangalore",
        stte: "Karnataka",
        langulage: "Kannada",
      },
      subjects: [
        "HTML",
        "CSS",
        "JS",
        "ReactJS",
        "NodeJS",
        "MongoDB",
        "Express",
      ],
    };
    this.showMessage = this.showMessage.bind(this);
  }
  showMessage() {
    // this.state.isShowMesagge = true
    this.setState({ isShowMesagge: true });
  }

  // showMessage = ()=>{
  //     this.setState({isShowMesagge:true})
  // }
  render() {
    const { WelcomeMessage } = this.state;
    return (
      <div>
        <button onClick={this.showMessage}>Show Message </button>
        {this.state.isShowMesagge && <h2>{WelcomeMessage}</h2>}
        {/* <h2>{this.state.fname}</h2>
        <h2>{this.state.personDetails.email}</h2> */}
        {/* <ul>
            {this.state.subjects.map((val,i)=>{
                return <li key={i}>{val}</li>
            })}
        </ul> */}

        {/* <ul>
            {Object.keys(this.state.personDetails).map((val)=>{
                return <li>{this.state.personDetails[val]}</li>
            })}
        </ul> */}
      </div>
    );
  }
}