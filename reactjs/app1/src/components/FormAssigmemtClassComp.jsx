import React, { Component } from 'react'

export default class FormAssigmemtClassComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        fname:"",
        lname:"",
        username:"",
        email:"",
        password:"",
        bio:"",
      }
    }

    
    handleChange = (e)=>{

        const name= e.target.name;
       this.setState({ ...this.state , [name] :e.target.value}  )
   }

   handleSubmit = ()=>{
       console.log(this.state);
       this.setState({
       fname:"",
       lname:"",
       username:"",
       email:"",
       password:"",
       bio:"",
       })
   }
  render() {


    return (
      <div>

        
        <h1> Register </h1> 
        <form>
           <label> First Name </label> <br />
           <input type="text" name="fname" onChange={(e) => this.handleChange(e)}  value={this.state.fname} />

           <br /> 
            
           <label> Last Name  </label> <br />
           <input type="text" name="lname" onChange={(e) => this.handleChange(e)} value={this.state.lname}  />
           <br /> 

           <label> Username  </label> <br />
           <input type="text" name="username"  onChange={(e) => this.handleChange(e)} value={this.state.username} />

           <br /> 

           <label> E-mail </label> <br />
           <input type="text" name="email" onChange={(e) => this.handleChange(e)} value={this.state.email} />
           <br /> 

           <label>Password</label> <br />
           <input type="text" name="password" onChange={(e) => this.handleChange(e)}  value={this.state.password} />
           <br /> 

           <label> Short Bio </label> <br />
           <textarea rows={5} cols={30}  name='bio' onChange={(e) => this.handleChange(e)} value={this.state.bio}/>
           <br />
              <button onClick={this.handleSubmit} type='button'> Submit </button>
        </form>
</div>

      
    )
  }
}
