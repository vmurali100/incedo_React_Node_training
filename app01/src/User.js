import React from "react";

class User extends React.Component{
    render()
    {
        return<h2>Hello from User</h2>
    }
}
export class User2 extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Sathya"
        };

    }
    render(){
        return <h3> {this.state.name}</h3>
    }
}
export default User;
