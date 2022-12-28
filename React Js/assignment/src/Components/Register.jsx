import React,{Component} from "react";

export default class Register extends Component{
    constructor(){
        super();
        this.state = {
            fname : "",
            lname: "",
            username: "",
            email: "",
            phone: "",
            pwd:"",
            bio:""


        }
    }
}