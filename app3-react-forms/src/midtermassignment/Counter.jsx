import React,{Component} from 'react';

class Counter extends Component
{
     constructor(props)
     {
        super(props);
        this.state={
            counter:0
        };
     };

     increment = ()=>{
        this.setState({counter:this.state.counter+1});
     }

     decrement = ()=>{
        this.setState({counter:this.state.counter-1});
     }

     render()
     {
        return <div className="container">
                <button type="button" className="btn btn-primary" onClick={()=>this.increment()} style={{"margin-top":"400px","margin-left":"200px"}}>increment</button>
                <h1>{this.state.counter}</h1>
                <button type="button" className="btn btn-primary" onClick={()=>this.decrement()} style={{"margin-left":"200px"}}>decrement</button>
               </div>
     }
}

export default Counter;