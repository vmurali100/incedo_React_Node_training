import { Component } from "react";

class Person extends Component{
    constructor(){
        super()
        this.state = {
            isShowMesagge: false,
            welcomemessage: "hi all welcome to training",
            fname: "Nishevidhaa",
            personDetails: {
              email: "nishevidhaa@gmail.com",
              city: "Salem",
              state:"TN",
              langulage:"Tamil"
            },
            subjects: ["HTML", "CSS", "JS", "ReactJS","NodeJS","MySql","Express"],
          };
          this.showMessage = this.showMessage.bind(this);
        }
        showMessage() {
        //   this.state.isShowMesagge = true
          this.setState({ isShowMesagge: true });
        }
      
        // showMessage = ()=>{
        //     this.setState({isShowMesagge:true})
        // }
        
    render(){
        const { WelcomeMessage } = this.state;
        
        return (
            <div>
                <button onClick={this.showMessage}>Show Message </button>
                {this.state.isShowMesagge && <h2>{WelcomeMessage}</h2>}
            {/* <h3>{this.state.fname}</h3>
            <h3>{this.state.lname}</h3>
            <h3>{this.state.Native}</h3> */}
            
            {/* <ul>
            {Object.keys(this.state.personDetails).map((val)=>{
                return <li>{this.state.personDetails[val]}</li>
            })}
        </ul> */}
            {/* <ul>
                <ul>
            {this.state.subjects.map((val,i)=>{
                return <li key={i}>{val}</li>
            })}
        </ul>
            </ul> */}
            </div>
        )
       
    }
    
}
export default Person