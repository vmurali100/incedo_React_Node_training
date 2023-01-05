import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProductAction, deleteProductAction, updateProductAction } from '../Actions'
import {ADD_PRODUCT} from '../Actions/actionsTypes'

class Products extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         product : {
            id:"",
            pname:"", 
            price:"",
         } ,
         isEdit :false,
      }
    }

    

    handleChange = (e) => {
        

        const name = e.target.name;
        // // var newUser = {...this.state};

        // this.setState({ ...this.state, [name]: e.target.value})
 

    //      console.log({...this.state});
        let newEmp = { ...this.state.product };
    newEmp[e.target.name] = e.target.value;
    this.setState({product: newEmp});


    }

    handleClick = () => {

        console.log(this.state.product);
        this.props.addProduct( this.state.product);
        console.log(this.props.products);
      this.clearForm();



        
    }

    handleDelete = (id) => {
  
        this.props.delProduct(id);
              
    }
    
    submitEdit = () => {


      this.props.editproduct( this.state.product);
      this.setState( { isEdit: false} )
      this.clearForm();


           
    }

    handleUpdate = ( editproduct) => {

      console.log( editproduct);

      // this.setState( { ...this.state, product: editproduct});

      this.setState({product: editproduct , isEdit:!this.state.isEdit});
   
        
      console.log( this.state.product);


    }


    clearForm = () => {

      this.setState( {
        product: {


          id:"",
          name:"", 
            price:"",

        }
      })
    }
  render() {

         
      
    return (
      <div>
             
             <form> 
                            <label htmlFor='id'> ID  </label>
                            <input  disabled ={ this.state.isEdit ? true: false}  type='text'  name='id'  onChange={ (e) =>  this.handleChange(e) } value={ this.state.product.id} />

                            <label htmlFor='name'> Product Name  </label>
                            <input   type='text'  name='name'  onChange={ (e) =>  this.handleChange(e) }  value={ this.state.product.name} />

                            <label htmlFor='price'> Product price </label>
                            <input   type='text'  name='price'   onChange={ (e) =>  this.handleChange(e) } value={ this.state.product.price} />
                            
 
                            { !this.state.isEdit ?  <button type='button' onClick={this.handleClick} > Add Product </button> : 
                             
                              <button type='button' onClick={this.submitEdit}> Edit </button>
                            }
                             
                 
             </form>
 
  
             <ul style={{listStyleType:'none' }}>

                {this.props.products.map ( ( product , i ) =>{ 

                 return (
                  <div  key={i}style={{ display:'flex' , flexDirection:'row' , padding:'10px' , border:'1px solid black'}}>
                    <li style={{padding:'10px'}}>{ product.id} </li>
                    <li  style={{padding:'10px'}}> {product.name} </li>
                    <li style={{padding:'10px'}}> { product.price} </li>
                    <li style={{padding:'10px'}}>  <button onClick={ () =>  this.handleUpdate( product)}>  Edit </button> </li>
                    <li style={{padding:'10px'}}> <button onClick={() => this.handleDelete(product.id)} >Delete </button></li>

                  </div>
                    // console.log(product)
                    

                 );
                } )}
             </ul>
      </div>
    )
  }
}



function mapStateToProps( state ) {
 
    return {

        products : state.products,
    }
}

function mapDispatchToProps ( dispatch) {

    return {

        addProduct : (p) => { dispatch(addProductAction(p))},
        delProduct : (p) => { dispatch(deleteProductAction(p)) }, 
        editproduct : (p) => { dispatch (updateProductAction(p))}
    }
}



export default  connect(mapStateToProps , mapDispatchToProps)(Products);