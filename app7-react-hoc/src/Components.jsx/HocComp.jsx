import React,{Component} from 'react';
import {useState} from 'react';


const HocComp = (OriginalComponent)=>
{
     class NewComp extends Component
     {
        constructor(props)
        {
          super(props);
          console.log(props);
          this.state={
             count:0
          }
        }
    
       increment = ()=>{
        this. setState({count:this.state.count+1});
       };
    
      decrement = ()=>{
         this.setState({count:this.state.count-1});
       }

       
        render()
        {
          return (<div>
            <OriginalComponent count={this.state.count}  increment={this.increment} decrement={this.decrement} /> 
            </div>)
        }
       
     };
    return NewComp;
}


export default HocComp;