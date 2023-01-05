
import React, { Component } from "react";
class User extends Component{
    render(){
        return <h1>Hello from User</h1>
    }
}
export default User;
export class MainUser extends Component{
    render(){
        return(
            <h1>Hello from MainUser</h1>
        )
    }
}
export class OtherUser extends Component{
    render(){
        return(
            <h1>Hello from OtherUser</h1>
        )
    }
}