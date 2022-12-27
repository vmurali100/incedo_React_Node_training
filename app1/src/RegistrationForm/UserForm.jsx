import React from "react";
import { useState } from "react";

const UserForm = () => {
  // WE can declare a Variable , and a function to manipulate that variable ;
  //   const [age, setAge] = useState(40);

  const [user, setUser] = useState({ fname: "", lname: "", email: "" });

  const handleSubmit = () => {
    console.log(user);
    clearForm()
  };
  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const clearForm=()=>{
    setUser({ fname: "", lname: "", email: "" })
  }
  return (
    <div>
      
    </div>
  );
};

export default UserForm;