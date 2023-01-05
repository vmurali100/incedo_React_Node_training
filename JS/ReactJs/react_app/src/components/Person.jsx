import { Component } from "react";
export default class Person extends Component{
    constructor(){
        super();
        this.state={
            isshowMessage:false,
            WelcomeMessage:"Hi All... Welcome to Incedo Training",
            fname:"Varsha",
            personDetails:{
                email:"varsha@gmail.com",
                city:"Chennai"
            },
            subjects:[
                "HTML","CSS","JS","ReactJS"
            ]
        };
        //this is not needed if arrow function is there
        this.showMessage=this.showMessage.bind(this);
    }
    showMessage(){
        this.setState({isshowMessage:true})
    }
    
    // showMessage=()=>{
    //     this.setState({isshowMessage:true})
    // }
    

    render(){
        const {WelcomeMessage}=this.state;
        return (
        <div>
            <button onClick={this.showMessage}>Show Message</button>
            {this.state.isshowMessage && <h2>{WelcomeMessage}</h2>}
            
             {/* <h2>{this.state.fname}</h2> */}
             {/* <h2>{this.state.personDetails.email}</h2> */}
            {/* <ul>
            {this.state.subjects.map((val,i)=>{ 
                return <li key={i}>{val}</li>
              })}
            </ul>  */}

            {/* iterating through object */}
            {/* for(i in this.state.personDetails){
                console.log(personDetails[i])
            }  */}

            {/* To change the object into array */}

            {/* <ul>{Object.keys(this.state.personDetails).map((val,i)=>{
                return <li>{this.state.personDetails[val]}</li>
            })}</ul> */}


            </div>
        )
    }
}