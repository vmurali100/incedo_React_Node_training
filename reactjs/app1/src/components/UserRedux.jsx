import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addUserAction, deleteUserAction, updateUserAction } from '../Actions';

class UserRedux extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         user : {

            username:"",
            email:"",
            password:"",
            confirmPassword:"",
         },
         isEdit:false,
      }
    }
  render() {
    return (
      <div>
             <form>
                
              <label htmlFor='username'> Username:</label>
              <input  type="text"  name="username" value={this.state.user.username} 
              
                  
              />

            </form>           
            
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
      deleteUser: (user) => dispatch(deleteUserAction(user)),
      addUser: (user) => dispatch(addUserAction(user)),
      udpateUser: (user) => dispatch(updateUserAction(user)),
    };
  }


  export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);