import React, { Component } from 'react'

class Timer extends Component {
  constructor(props){
    super(props);
    this.state={seconds:0};
    
}
onStart=()=>{
   this.setState({seconds:this.state.seconds+1});

}
timer=()=>{
  this.f=setInterval(this.onStart,1000);
  console.log(this.f)
  document.getElementById('btn').disabled=true;
}
onStop=()=>{
    clearInterval(this.f);
}
onReset=()=>{
    clearInterval(this.f);
    document.getElementById('btn').disabled=false;
    this.setState({seconds:0})
}

onPause=()=>{

}

render(){
    return(
        <div>
            <h1>{this.state.seconds}</h1>
            <button id='btn' onClick={this.timer}>Start</button>
            {/* <button onClick={this.onPause}>Pause</button> */}
            <button onClick={this.onStop}>Stop</button>
            <button onClick={this.onReset}>Reset</button>
        </div>
    )
}
}

export default Timer