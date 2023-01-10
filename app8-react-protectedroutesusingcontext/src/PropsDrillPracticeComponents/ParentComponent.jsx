import React,{Component} from 'react';
import ChildComponent from './ChildComponent';
class Parent extends Component
{
   
   render()
   {
    console.log(this.props);
    return <div>
    <h1>Welcome to ParentComponent !!!</h1>
    <hr/>
    <ChildComponent users={this.props} />
    </div>
   }
};

export default Parent;