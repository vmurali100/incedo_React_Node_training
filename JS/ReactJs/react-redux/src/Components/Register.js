// import React, { Component } from "react";
// import { connect } from "react-redux";

// class Register extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       user: {
//         username:"",
//         email: "",
//         password:"",
//         RepeatPass:""
//       },
//       isEdit: false,
//     };
//   }

  
//   handleChange = (e) => {
//     let newUser = { ...this.state.user };
//     newUser[e.target.name] = e.target.value;
//     this.setState({ user: newUser });
//   };

 
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <form action="">
//           <label >User Name : </label>
//           <input
//             type="text"
//             name="username"
//             value={this.state.user.username}
//             onChange={(e) => {
//               this.handleChange(e);
//             }}
//           />{" "}
//           <br />
//           <label >Email: </label>
//           <input
//             type="text"
//             name="email"
//             value={this.state.user.email}
//             onChange={(e) => {
//               this.handleChange(e);
//             }}
//           />{" "}
//           <br />
//           <label>Password : </label>
//           <input
//             type="password"
//             name="password"
//             value={this.state.user.password}
//             disabled={this.state.isEdit ? true : false}
//             onChange={(e) => {
//               this.handleChange(e);
//             }}
//           />{" "}
//           <br />
          
//         </form>
//         <ul>
//           {this.props.users.map((user, i) => (
//             <li
//               style={{ margin: 5, cursor: "pointer" }}
//               key={i}
//               onClick={() => {
//                 this.setState({ user: user,isEdit: true });
//               }}
//             >
//               {user.username}- {user.email}
//               <span
//                 style={{
//                   width: 50,
//                   height: 50,
//                   borderRadius: "50%",
//                   background: "grey",
//                   padding: 2,
//                   color: "white",
//                   marginLeft:10
//                 }}
//                 onClick={() => {
//                   this.handleDelete(user);
//                 }}
//               >
//                 X{" "}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
// // Map State to Props contains access to the Store ... And Helps to retrive the required Data ..
// function mapStateToProps(state) {
//   console.log("Store is : ", state);
//   return {
//     users: state.users,
//   };
// }
// // This function will receive an dispatch Method and help to trigger the actions
// function mapDispatchToProps(dispatch) {
//   return {
    
//   };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Register); //