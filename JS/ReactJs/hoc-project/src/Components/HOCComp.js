import React,{Component} from "react"

const HOCComp=(OriginalComponent)=>{
    console.log(OriginalComponent)
    class NewComp extends Component{
        
        constructor(props){
            super(props)
            this.state={
                count:0,
            }
            console.log(props)
        }
        handleIncrement=()=>{
            this.setState({count:this.state.count+1});
        }
        render(){
            return(
                <div>
                        <OriginalComponent 
                        count={this.state.count} 
                        handleIncrement={this.handleIncrement}/>
                </div>
            )
        }
    }
    return NewComp
}
export default HOCComp;