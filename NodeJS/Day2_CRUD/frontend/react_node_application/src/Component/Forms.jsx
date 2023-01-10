// import '../CSS/Forms.css'
// import React, { Component } from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addUserAsyncAction } from "../store/usersSlice";

// const Forms = () => {
//     const [user, setUser] = useState({ uname: "",password: "", cpassword: "" ,email:"",fname:"",lname:"" });
//     const usersDetails = useSelector((state) => state.users);
//     const dispatch = useDispatch();
//     const handleChange = (e) => {
//         let newUser = { ...user };
//         newUser[e.target.name] = e.target.value;
//         setUser(newUser);
//       };
//       const handleSubmit = () => {
//         dispatch(
//             addUserAsyncAction(user)
//           );
        
//       };

//         return (
//             <div>
//                 <div class="row">
//                     <div class="col-md-12">
//                         <div class="p-3 mb-2 bg-primary text-white" style={{ textAlign: "left", fontWeight: "bold", fontSize: "20px" }}>CREATE AN ACCOUNT</div>
//                         <p style={{ "padding-left": "35px" }}>Enter all text fields to complete registration</p>
//                         <div class="container">
//                             <div class="card-body">
//                                 <div class="row">
//                                     <form class="row g-3">
//                                         <div class="col-12">
//                                             <label for="username" class="form-label">Username</label>
//                                             <input type="text" class="form-control" id="username" name="uname" value={user.uname} onChange={(e) => handleChange(e)} />
//                                             {" "}
//                                         </div>
//                                         <div class="col-md-6">
//                                             <label for="inputPassword" class="form-label">Password</label>
//                                             <input type="password" class="form-control" id="inputPassword4" name="password" value={user.password} onChange={(e) => handleChange(e)} />
//                                             {" "}
//                                         </div>
//                                         <div class="col-md-6">
//                                             <label for="inputConfirmPassword" class="form-label">Confirm Password</label>
//                                             <input type="password" class="form-control" id="inputConfirmPassword" name="cpassword" value={user.cpassword} onChange={(e) => handleChange(e)} />
//                                             {" "}
//                                         </div>
//                                         <div class="col-12">
//                                             <label for="inputEmail" class="form-label">Email</label>
//                                             <input type="email" class="form-control" id="inputEmail" name="email" value={user.email} onChange={(e) => handleChange(e)} />
//                                             {" "}
//                                         </div>
//                                         <div class="col-md-6">
//                                             <label for="inputFirstName" class="form-label">First Name</label>
//                                             <input type="text" class="form-control" id="inputFirstName" name="fname" value={user.fname} onChange={(e) => handleChange(e)} />
//                                             {" "}
//                                         </div>
//                                         <div class="col-md-6">
//                                             <label for="inputLastName" class="form-label">Last Name</label>
//                                             <input type="text" class="form-control" id="inputLastName" name="lname" value={user.lname} onChange={(e) => handleChange(e)} />
//                                             {" "}
//                                         </div>
//                                         <div class="col-12">

//                                             <center><button type="button" class="btn-lg col-10 b" style={{ height: "50px", color: "white", fontWeight: "bold", fontSize: "20px" }} onClick={handleSubmit}>REGISTER</button></center>
//                                         </div>
//                                         <div class="col-12">
//                                             <p>Already have an account? <a href="#" style={{ textDecoration: "none" }}>Sign in</a></p>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }


// export default Forms;