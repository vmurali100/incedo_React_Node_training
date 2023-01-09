import React from 'react'

function HOC( ComponentFromComp , entity ) {


  return   class HOC extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         commonData : [],
      }
    }
  
 

    render() {
      return (
        <div>
            <h1> { entity} </h1> 

            <ComponentFromComp >   </ComponentFromComp>

        </div>
      )
    }
  }
  
}

export default HOC