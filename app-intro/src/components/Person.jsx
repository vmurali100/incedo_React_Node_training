import React,{Component} from "react";

class Person extends Component{
    constructor()
    {
        super();
        this.state={
            fname:"segu",
            lname:"naveen",
            personalDetails:{
                email:"segu.naveen@incedoinc.com",
                role:"full stack developer",
                native:"nellore,AndhraPradesh",
                languagesSpoke:"Telugu,Tamil,Hindi,English"
            },
            subjects:["HTML","CSS","JavaScript","JSX","React.js","Node.js","MongoDB"],
            showMessage:"This is hidded message which is displayed on button click event.This is called conditional rendering",
            isShowMessage:false,
        }

        //suppose if you want to use this keyword inside the normal function then you need to bind that method with
        //this keyword.
        this.showmessage=this.showmessage.bind(this);
    }
  
    showmessage()
    {
       console.log(this);
       console.log("inside showmessage");
       this.setState({isShowMessage:true});
    }

    showmessage2 = ()=>{
        console.log(this);
        console.log("inside showmessage2 method");
        this.setState({isShowMessage:true});
    }

    render()
    {
        return <>
               <h2>{this.state.fname}</h2>
               <h2>{this.state.lname}</h2>
               <h2>{this.state.personalDetails.email}</h2>
               <h2>{this.state.personalDetails.role}</h2>
               <ul>
                  {this.state.subjects.map((sub,i)=>{return <li key={i}>{sub}</li>})}
               </ul>
               <ol>
                  {Object.keys(this.state.personalDetails).map((val,i)=>{return <li key={i}>{this.state.personalDetails[val]}</li>})}
               </ol>
               <h3>{Object.keys(this.state.personalDetails)}</h3>
               //what is this refers to here? even though it referres to person object how.
               <button onClick={this.showmessage}>show hidded message normal function</button>
               <button onClick={this.showmessage2}>show hidded message with Arrow function</button>
               {/* conditional rendering */}
               {this.state.isShowMessage && <h3>{this.state.showMessage}</h3>}
               </>
    }
};

export default Person;