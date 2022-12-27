import React,{Component} from "react";
export class Person extends Component{
    constructor(){
        super();
        this.state={
            fname:"ManjunadhaReddy",
            isShowMesagge: false,
            WelcomeMessage:
        "Hi All ... Welcome to Incedo ReactJS And NodeJS Training !!",
            personalDetails:{
                email:"manjunadh@gmail.com",
                city:"Narasaraopet",
                language:"telugu",
                State:"andhra"
            },
            "Technologies":['Html','css','react']
        }
    
    this.showMessage = this.showMessage.bind(this);
  }
  showMessage() {
    // this.state.isShowMesagge = true
    this.setState({ isShowMesagge: true });
  }
    render(){
        
                const { WelcomeMessage } = this.state;
    return (
      <div>
        <button onClick={this.showMessage}>Show Message </button>
        {this.state.isShowMesagge && <h2>{WelcomeMessage}</h2>}

        {/* <h3>{this.state.fname}</h3>
        <h3>{this.state.personalDetails.city}</h3>
        
        {this.state.Technologies.map((value,i)=>{
        return  <li key={i}>{value}</li>
    })
        }
        <ul>
        {Object.keys(this.state.personalDetails).map((val,i)=>{
            return <li key={i}>{val}</li>
        })}
        {Object.keys(this.state.personalDetails).map((val)=>{
                return <li>{this.state.personalDetails[val]}</li>
            })}
        </ul> */}
        

        </div>
        )
    }
}