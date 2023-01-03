import React, { Component } from 'react'
import { connect } from 'react-redux'

class Products extends Component {
  render() {
    return (
      <div>
        <ul>
            {this.props.productDetails.map((product,i)=> <li key={i}>{product}</li> )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state){
    return {
        productDetails : state.products
    }
}
export default connect(mapStateToProps)(Products)
