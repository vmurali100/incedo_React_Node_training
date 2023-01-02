import React, { Component } from 'react'
import LifeCycleBComp from './LifeCycleBComp'
import LifeCycleCComp from './LifeCycleCComp'

export default class LifeCycleAComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         showImage:true
      }
      console.log("LifeCycleAComp constructor Triggered !!!")

    }

    static getDerivedStateFromProps(){
        console.log("LifeCycleAComp getDerivedStateFromProps Triggered !!!")

        return null
    }
    
  render() {
    console.log("LifeCycleAComp render Triggered !!!")

    return (
      <div>
        <button onClick={()=>{this.setState({showImage:!this.state.showImage})}}>Toggle Image</button>
        {/* <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increment Count</button> */}
        <LifeCycleBComp count={this.state.count}/>
        {this.state.showImage && <LifeCycleCComp/>}
        
      </div>
    )
  }

  //useEffect
  componentDidMount(){
    console.log("LifeCycleAComp componentDidMount Triggered !!!")
  }
}