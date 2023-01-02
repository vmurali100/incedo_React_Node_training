import React,{Component} from 'react';
import { UserContext } from './authContext';
import { createContext } from 'react';

// class TextClassContext extends Component
// {
//     static contextType = UserContext;
//     render()
//     {
//         let userDetails = this.context;
//         console.log(userDetails);
//         return <>
//                </>
//     }
// };

// export default TextClassContext;

// const Ctx = React.createContext(0)

// class TextClassContext extends React.Component {

//  //this static contexttype will set the context for the particular class , and this should be assigned with 
//  //createContext object and by using this.context we will be returned with values of nearby context provider. 
//   static contextType = Ctx
//   render () {
//     return <>My context's value: {this.context}</>;
//   }
// };

// export default TextClassContext;

class TextClassContext extends React.Component {
    componentDidMount() {
      let value = this.context;
      console.log(value);
      /* perform a side-effect at mount using the value of MyContext */
    }
    componentDidUpdate() {
      let value = this.context;
      console.log(value);
      /* ... */
    }
    componentWillUnmount() {
      let value = this.context;
      console.log(value);
      /* ... */
    }
    render() {
      let value = this.context;
      console.log(value);
      return <></>
      /* render something based on the value of MyContext */
    }
  }
  TextClassContext.contextType = UserContext;

  export default TextClassContext;