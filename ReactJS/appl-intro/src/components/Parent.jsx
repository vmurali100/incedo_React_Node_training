import React from "react";
import { Fragment } from "react";
import MyContext from "../context/Context";
import Child from "./Child";

import './Parent.css';
export default class Parent extends React.Component
{
    constructor()
    {
        super();
        this.state={
            message:""
        }
        this.h1Ref=React.createRef()
    }
    setMessage=(message)=>
    {
        // this.setState({message:message})
        console.log("Testing :",this.h1Ref.current.id)
        this.h1Ref.current.setAttribute("class","hello")
        console.log("Testing :",this.h1Ref.current)
    }
    
    render()
    {
        return <Fragment>
            <div id={"test"} style={{}}>
            <h3>Parent</h3>
            <MyContext.Provider value={{name:this.state.message,toggle:(message)=>{this.setState({message:message})}}}>
            <h1 id={"#hello"} ref={this.h1Ref}>{this.state.message}</h1>
        <Child {...this.state}  setMessage={this.setMessage}/>
        </MyContext.Provider></div>

        </Fragment>
    }
   
}