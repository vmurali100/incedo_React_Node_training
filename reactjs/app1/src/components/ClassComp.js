import React from "react";

class ClassComp extends React.Component {
 
    constructor() {
        super();
        this.state={
            isShowMessage:false,
            name:"Hari " ,
            subjects : ["HTML" , "CSS" , "JS"  , "REACT"],
            userDetails : {
                "email" :"xyz@gmail.com", 
                "dob" :"20-11-2000",
                "firstName" :"Hari",
                
            }
        }
    }
      handleClick = ()=> 
      {
        this.setState({isShowMessage:true});
    }
    render() {

       return    <div>
       {this.state.isShowMessage && <h1>{ this.state.name}</h1> }

        <button onClick={this.handleClick}>  Show Message </button>
 
       
       <ul>
        { this.state.subjects.map( (subject  , i) => (
                 
                 <li key={i}> { subject} </li>

        ))}
       </ul>


       <ul> 
        {
            Object.values(this.state.userDetails ).map( ( user , i)=> {

                return <li key={i}> {user}  </li>
            }) 
        }
       </ul>
       </div>
    
    }
}

export default ClassComp;