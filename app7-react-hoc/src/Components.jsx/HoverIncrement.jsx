
import React,{Component} from 'react';
import HocComp from './HocComp';

class HoverComponent extends Component
{
    render()
    {
        return (<div>
                <h1 onMouseOver={this.props.increment}>Hover over this heading</h1>
                <h1>{this.props.count}</h1>
               </div>)
    }
};

export default HocComp(HoverComponent);