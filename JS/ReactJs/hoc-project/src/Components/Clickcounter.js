import React,{ Component} from 'react'
import HOCComp from './HOCComp'
class Clickcounter extends Component{
    
    render(){
        return(
            <div>
                <button onClick={this.props.handleIncrement}>Click</button>
                <h2>you clicked {this.props.count} times!!</h2>
            </div>
        )
    }
}
export default HOCComp(Clickcounter)