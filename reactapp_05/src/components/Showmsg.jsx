import React, { Component } from 'react';
class Showmsg extends Component {
    constructor(){
        super();
        this.state={
            isshowmsg : false,
            msg : "Hi, welcome to incedo!"
        };
    }

   showmsg = () => {
        this.setState({isshowmsg : true});

    }
  
    render() { 
        return (
            <div>

                <button onClick = {this.showmsg}>show</button>
                {this.state.isshowmsg && <h2>{this.state.msg}</h2>}

            </div>

        );
    }
}
 
export default Showmsg ;