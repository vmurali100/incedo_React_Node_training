import React,{Component} from 'react'
import { connect } from 'react-redux'
class Products extends Component{
    render(){
        return(
            <div>
                <ul>
                    {this.props.productDetails.map((prod,i)=><li key={i}>{prod}</li>)}
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
    productDetails:state.products
    }
}
export default connect(mapStateToProps)(Products)