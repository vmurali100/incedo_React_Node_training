import React, {Component} from "react";

class User extends Component{
    render(){
        return <h2>In User Component!!</h2>
    }
}

export class OtherUser extends Component {
    render() {
        return <h2>In Other Component!!</h2>
    }
}

export default User;
