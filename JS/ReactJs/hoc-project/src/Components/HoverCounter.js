import React,{Component} from "react"
import HOCComp from "./HOCComp"

class HoverCounter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <div>
            <h2 onMouseOver={this.handleIncrement}>Hover on me</h2>
            <h2>you hovered {this.state.count} times!!</h2>
            </div>
        )
    }
}
export default HOCComp(HoverCounter)