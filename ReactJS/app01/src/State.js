import React from 'react'

class State extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Nanditha"
        }
    }

    render(){
        return <div>
            <h2>{this.state.name}</h2>
        </div>
    }
}

export default State