import React,{Component} from "react";


export class Person extends React.Component{
    constructor(){
        super();
        this.state={
            subjects:["HTML","CSS","Javascript"],
        };
    }

    render(){
        return (
            <div>
             <ul>
            {this.state.subjects.map((val,i)=>{
                return <li key={i}>{val}</li>
            })}
        </ul>
             </div>
)
}}
export default Person;
