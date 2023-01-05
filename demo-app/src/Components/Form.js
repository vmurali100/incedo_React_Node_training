import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)

        this.state={user:{
            fname:"",
            lname:"",
            password:""}
        }}
        regUser=()=>{
            this.props.regUser(this.state.user);
            this.clearForm();
        }
        clearForm=()=>{
            this.setstate={user:{
                fname:"",
                lname:"",
                password:""}
            }
        }
     handleChange=(e)=>{
            var name=e.target.name;
            var newUser={...this.state.user};
            newUser[name]=e.target.value;
            this.setState({user:newUser});
        }

    //const [first, setfirst] = useState({fname:"",lname:"",password:""}); for functional components
  render() {
    return (
      <div>Form:
      <form>
        <input
        text=""
        placeholder='Enter first name'
        name='fname'
        value={this.state.fname}
        onChange={(e)=>{this.handleChange(e)}}/>
        <input
        type="text"
        placeholder='Enter last name'
        name='lname'
        value={this.state.lname}
        onChange={(e)=>{this.handleChange(e)}}/>
        <input
        type="password"
        placeholder='Enter first name'
        name='password'
        value={this.state.password}
        onChange={(e)=>{this.handleChange(e)}}/>
      </form>
      {this.props.users.map((use, i) => (
            <li
              style={{ margin: 5, cursor: "pointer" }}
              key={i}
              onClick={() => {
                this.setState({ user: use});
              }}
            >
              {use.fname}- {use.lname} - {use.password}
            </li>
          ))}
      </div>
    );
  }

}