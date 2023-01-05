import React from "react";
import { connect } from "react-redux";
import { addUserAction } from "../actions/index.js";


class Users extends React.Component{
    constructor(props){
        super(props);

        this.state={
            user:{
                username:"",
                email:"",
                password:""
            }
        };
    }
    RegUser=()=>{
        console.log(this.state.user);
        this.props.RegUser(this.state.user);
        this.clearForm();
    };
    clearForm=()=>{
        this.setState({
            user:{
                username:"",
                email:"",
                password:""
            },
        });
    };
    handleChange = (e) => {
        let newUser = { ...this.state.user };
        newUser[e.target.name] = e.target.value;
        this.setState({ user: newUser });
      };
    
    render(){
        console.log(this.props);
        return(
            <div>
                <form action="">
                    <label htmlFor="username">Username: </label>
                    <input
                    type="text"
                    name="username"
                    value={this.state.user.username}
                    onChange={(e)=>{
                        this.handleChange(e);
                    }}/>{" "}
                    <br/>
                    <label htmlFor="email">Email: </label>
                    <input
                    type="text"
                    name="email"
                    value={this.state.user.email}
                    onChange={(e)=>{
                        this.handleChange(e);
                    }}/>{" "}
                     <button onClick={this.RegUser} type="button">
                    Register user
                    </button>
                </form>
                <ul>
          {this.props.users.map((use, i) => (
            <li
              style={{ margin: 5, cursor: "pointer" }}
              key={i}
              onClick={() => {
                this.setState({ user: use});
              }}
            >
              {use.username}- {use.email} - {use.password}
            </li>
          ))}
        </ul>
            </div>
        )
    }

}

function mapStateToProps(state) {
    console.log("Store is : ", state);
    return {
      users: state.users,
    };
  }
  // This function will receive an dispatch Method and help to trigger the actions
  function mapDispatchToProps(dispatch) {
    return {
      RegUser: (use) => dispatch(addUserAction(use)),
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Users);