import React from "react";

class Classcomp extends React.Components{
    constructor(){
        super();
        this.state ={
        fname: "subhash",
        personDetails:{
            email: "subhash.mandli",
            city:"Anantapur",
        },
        subjects: ["HTML","CSS"],

        

        };
    }
    render(){
        return(
            <div>
                <h2>{this.state.fname}</h2>
            </div>
        )
    }
}