import React, { Component } from "react";

class User extends Component {
  render() {
    return <h2>Hello from User Component !!</h2>;
  }
}


export class MainUser extends Component{
    render(){
        return <h2>Hello from MainUser Component !!</h2>
    }
}

export class OtherUser extends Component{
    render() {
      return (
        <h2>Hello from Other User</h2>
      )
    }
}

export default User;
