import React,{Component} from 'react';
import { connect } from 'react-redux';
import { addUser,getUsers } from '../actions/Actions';


class FormComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            register:{
                username:'',
                password:'',
                confirmpassword:'',
                email:'',
                firstname:'',
                lastname:''
            }
        }
    }
   
    
    handleChange = (e) =>
    {
        console.log(this.state);
        var newRegister = {...this.state.register};
        newRegister[e.target.name] = e.target.value;
        this.setState({register:newRegister});
    }
    count = 0;
    componentDidMount()
    {
       this.props.dispatchgetUser(); 
    }
    componentDidUpdate()
    {
        console.log("inside component did update"+this.count);
        if(this.count == 0)
        {
          console.log("inside if statement");
          this.setState({register:this.props.registerUser});
          this.count++;
        }
    }
    handleSubmit = () =>
    {
        //data need to be posted in database
        this.props.dispatchAddUser(this.state.register);
        this.clearForm();
    }

    clearForm = ()=>{
        this.setState({register:{
            username:'',
            password:'',
            confirmpassword:'',
            email:'',
            firstname:'',
            lastname:''
        }})
    };
    render()
    {
        return <>
               <form>
                <label htmlFor='username' >Username:</label>
                <input type="text" name="username" id="username" value={this.state.register.username} onChange={(e)=>{this.handleChange(e)}} /><br/><br/>
                <label htmlFor='password' >Password</label>
                <input type="password" name="password" id="password" value={this.state.register.password} onChange={(e)=>{this.handleChange(e)}} /><br/><br/>
                <label htmlFor='confirmpassword' >ConfirmPassword</label>
                <input type="password" name="confirmpassword" id="confirmpassword" value={this.state.register.confirmpassword} onChange={(e)=>{this.handleChange(e)}} /><br/><br/>
                <label htmlFor='email' >Email</label>
                <input type="text" name="email" id="email" value={this.state.register.email} onChange={(e)=>{this.handleChange(e)}} /><br/><br/>
                <label htmlFor='firstname'>FirstName</label>
                <input type="text" name="firstname" id="firstname" value={this.state.register.firstname} onChange={(e)=>{this.handleChange(e)}} /><br/><br/>
                <label htmlFor='lastname'>LastName</label>
                <input type="text" name="lastname" id="lastname" value={this.state.register.lastname} onChange={(e)=>{this.handleChange(e)}} /><br/><br/>
                <button type="button" onClick={()=>this.handleSubmit()}>Register</button>
               </form>
               </>
    };
};

const mapStateToProps = (state)=>{
    console.log(state);
    return {
        registerUsers:state.registerUsers,
        registerUser:state.registerUser,
        isEdit:state.isEdit
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        dispatchAddUser:(user)=>dispatch(addUser(user)),
        dispatchgetUser:()=>dispatch(getUsers())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FormComponent);