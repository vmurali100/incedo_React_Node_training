import React,{Component} from "react";
import HocComp from "./HocComp";

class ClickIncrement extends Component
{
    render()
    {
        return<>
              <h1>The value of count is :{this.props.count}</h1>
              <button onClick={this.props.increment}>Increment</button>
              </>
    };
};

export default HocComp(ClickIncrement);