import React,{Component} from 'react';

class UserComponent extends Component
{
   render()
   {
      return <>
             <h1>Welcome to UserComponent</h1>
             <hr/>
             {this.props.users.users.users.map((user,i)=>(<li key={i}>{user}</li>))}
             </>
   };
};

export default UserComponent;