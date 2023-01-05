import React, { Component } from 'react'
import { connect } from "react-redux";
import { addProductAction, delProductAction } from '../Actions';
export class Product extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         product: {id:"",pname:"",price:"" },isEdit:false
      }
    }
    handleChange=(e)=>{
        const name={...this.state.product};
        name[e.target.name]=e.target.value;
        this.setState({product:name})
        console.log(this.state.product)
    }
    handleClick=()=>{
        // console.log("Submited")
        console.log(this.state.product)
        this.props.addProduct(this.state.product)
        console.log(this.props.products)
    }
    clearForm=()=>{
      this.setState({product: {id:"", pname:"",price:"  "}})
    }
    handleDelete=(id)=>{
      this.props.delProduct(id);
    }
    handleEdit=()=>{
      this.setState({isEdit:!this.state.isEdit})
    }
    
  render() {
    return (
      <div>
        <form>
            <input type="text" placeholder="ID" name="id" value={this.state.id} onChange={(e)=>this.handleChange(e)}/><br/>
            <input type="text" placeholder="Product Name" name="pname" onChange={(e)=>this.handleChange(e)}/><br/>
            <input type="text" placeholder="Product Price" name="price" onChange={(e)=>this.handleChange(e)}/><br/>
            {!this.state.isEdit ? <button type="button" onClick={this.handleClick} >Add Product</button> : <button type="button" onClick={this.handleClick} >Edit Product</button> }
        </form>
        <ul style={{listStyleType:'none'}}>
            {this.props.products.map((prod,i)=>{return (
            <div style={{display: 'flex',flexDirection: 'row'}}>
                <li key={i} style={{paddingRight:'10px'}}>{prod.id}</li>
                <li key={i} style={{paddingRight:'10px'}}>{prod.pname}</li>
                <li key={i} style={{paddingRight:'10px'}}>{prod.price}</li>
                <li style={{paddingRight:'10px'}}>
                  {}<button type="button" onClick={()=>this.handleEdit()}>Edit</button>
                </li>
                <li>
                  <button type="button" onClick={()=>this.handleDelete(prod.id)}>Delete</button>
                </li>
            </div>)})}
        </ul>
      </div>
    )
  }
}
function mapStatetoProps(state){
    return{
        products: state.products
    }
}
function mapDispatchToProps(dispatch){
    return{
        addProduct: (prod)=>{dispatch(addProductAction(prod))},
        delProduct: (prod)=>{dispatch(delProductAction(prod))}
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Product)
