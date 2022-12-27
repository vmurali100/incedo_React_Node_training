import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

    constructor() {
      super()
    
      this.state = {
         
        name:"Hari " ,
        subjects : ["HTML" , "CSS" , "JS"  , "REACT"],
        userDetails : {
            "email" :"xyz@gmail.com", 
            "dob" :"20-11-2000",
            "firstName" :"Hari",
            
        }

      }

      
    }
    changeName = ()=> {

        this.setState( { name:"Akshay"});
      }
  render() {
    return (
      <div> 
         <Child {...this.state} changeName={this.changeName} />
         </div>
    )
    
  }
}
