
import React, { Fragment } from "react";


export default class ChrisClass extends React.Component
{
    constructor()
    {
        super();
        this.state={
            flag:false,
            email:"Hello",
            array:["Hello","World"],
       object:{fname:"Testings",lname:"testings "}
        }
        this.getmessage=this.getmessage.bind(this);
    }
    getmessage=()=>
    {
        this.setState((state,props)=>({flag:!state.flag}));
        
    }
    render()
    {
        return <Fragment>
            <button on onClick={this.getmessage}>Toogle</button>
            {this.state.flag && <ol>
                {this.state.array.map((val,i)=>{
                    return <li key={i}>{val}</li>
                })}
            </ol>}
            <ol>
            {Object.keys(this.state.object).map((val,i)=>
            {
                return <li key={i}>{this.state.object[val]}</li>
            })}
            </ol>
        </Fragment>

    }
}
