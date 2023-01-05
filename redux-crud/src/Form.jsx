import React, { Component } from "react";

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",email:"",pass:"",cpass:""
        }
    }
handleChange=(e)=>{
        let newEmp={...this.state};
        newEmp[e.target.name]=e.target.value;
        this.setState({this.state:newEmp})
    }
    render(){

        return (<div>
            <section className="vh-100" style={{backgroundColor: "lightblue"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="htmlForm-outline flex-fill mb-0">
                      <input type="text" id="htmlForm3Example1c" className="htmlForm-control" value={this.state.name} onChange={(e)=>{this.handleChange(e)}} />
                      <label className="htmlForm-label" htmlFor="htmlForm3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="htmlForm-outline flex-fill mb-0">
                      <input type="email" id="htmlForm3Example3c" className="htmlForm-control" />
                      <label className="htmlForm-label" htmlFor="htmlForm3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="htmlForm-outline flex-fill mb-0">
                      <input type="password" id="htmlForm3Example4c" className="htmlForm-control" />
                      <label className="htmlForm-label" htmlFor="htmlForm3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="htmlForm-outline flex-fill mb-0">
                      <input type="password" id="htmlForm3Example4cd" className="htmlForm-control" />
                      <label className="htmlForm-label" htmlFor="htmlForm3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>)
    }
}