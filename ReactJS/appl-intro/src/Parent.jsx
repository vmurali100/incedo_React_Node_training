import React from "react";
import { Fragment } from "react";
import Child from "./Child";
export default class Parent extends React.Component
{
    constructor()
    {
        super();
        this.state={
            message:""
        }
    }
    setMessage=(message)=>
    {
        this.setState({message:message})
    }
    render()
    {
        return <Fragment>
            <h1>{this.state.message}</h1>
        <Child {...this.state}  setMessage={this.setMessage}/>
        </Fragment>
    }
   
}