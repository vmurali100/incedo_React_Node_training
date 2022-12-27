import React,{Component} from "react";

class User2 extends React.Component{
    render(){
        return<h2>Hello from Main User component</h2>
    }
}
export class Person extends React.Component{
    constructor(){
        super();
        this.state={
            isShowMesagge: false,
      WelcomeMessage:
        "Hi All ... Welcome to Incedeo ReactJS And NodeJS Training !!",
            fname:"Surya",
            personDetails: {
                email: "ram@gmail.com",
                city: "Bangalore",
                stte:"Karnataka",
                language:"Kannada"
              },
            subjects:["HTML","CSS","Javascript"],
        };
        this.showMessage = this.showMessage.bind(this);
    }
   showMessage=()=>{
    this.setState({isShowMesagge:true})
   }
    render(){
        return (
            <div>
             <h2>{this.state.fname}</h2>
             <ul>
            {this.state.subjects.map((val,i)=>{
                return <li key={i}>{val}</li>
            })}
        </ul>
        <ul>
            {Object.keys(this.state.personDetails).map((val)=>{
                return <li>{this.state.personDetails[val]}</li>
            })}
        </ul>
             </div>
)
}}
export default User;
