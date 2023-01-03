import React from 'react';
class Counter extends React.Component{
    state={
        count:0
    }
    increment(){
        this.setState({count:this.state.count+1})
    }
    render(){
        return <div>
            <h1>Counter</h1>
            <button onClick={()=>this.increment()}>increment</button>
            {this.state.count}
        </div>
    }
}
export default Counter;