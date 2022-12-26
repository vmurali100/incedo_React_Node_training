import React, {Component} from "react";


class Person extends Component {
    constructor(){
        super();
        this.state = {
            fname: "Tejasree",
            personDetails: {
                email: "teja.mb@incedoinc.com",
                city: "Chennai",
            },
            subjects : ["ReactJS" ,"Spring"],
        };
    }

    render(){
        return (
            <div>
                <h2>{this.state.fname}</h2>
                <h2>{this.state.personDetails.email}</h2>
                <h2>{this.state.personDetails.city}</h2>
                <h2>{this.state.subjects}</h2>
            </div>
        );
    }
}

export default Person;