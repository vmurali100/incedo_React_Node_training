import React,{Component} from 'react';

class User extends Component{
    render()
    {
        return <h2>Hello from default User Component</h2>
    }
};

//This default export refers to this is the default imported component if you do not specify any name to the imports
//in the component where you are importing this component.
export default User;

export class MainUser extends Component
{
   render()
   {
    return <h2>Hello from MainUser Component!!!</h2>
   }
};

export class OtherUser extends Component
{
    render()
    {
        return <h2>Hello from Other User Component!!!</h2>
    }
};

