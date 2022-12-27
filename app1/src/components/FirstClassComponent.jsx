import { Component } from "react";

export default class FirstClassComponent extends Component{
    constructor(){
        super();
        this.state = {
            isTrue:false,
            name:"mani",
            personal:{
                email:"mani@incedo.com",
                city:"Chennai"
            },
            array:["One","Two","Three"]
        }
    }
    render(){
        return(<div>
            {/* <ul>
                {
                    this.state.array.map((val,i)=>{
                       return <li key={i}>{val}</li>
                    })
                }
            </ul> */}
            <button onClick={()=>{this.setState({isTrue:true})}}>Show Details</button>
            <br />

            {this.state.isTrue && <ul>
                {
                    Object.keys(this.state.personal).map((val)=>{
                        return <li >{this.state.personal[val]}</li>
                    })
                }
            </ul>}
        </div>);
    }
}