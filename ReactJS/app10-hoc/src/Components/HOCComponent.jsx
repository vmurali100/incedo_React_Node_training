import React, { Component } from 'react'
    
const HOCComponent = (OriginalComp)=>{
    
    class newComp extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
             count:0,
          }
        }

        handleIncrement=()=>{
            this.setState({count:this.state.count+1});
        }

        handleDecrement=()=>{
            this.setState({count:this.state.count-1})
        }
        
      render() {
        return (
          <div>
            <OriginalComp count={this.state.count} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement}/>
          </div>
        )
      }

    }

    return newComp;
    
}

export default HOCComponent;