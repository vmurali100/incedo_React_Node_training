import React, {Component} from "react";


class Person extends Component {
    constructor()
    {
        super();
        this.state = {

            isShowMesagge: false,
            WelcomeMessage: "Hi All ... Welcome to Incedeo ReactJS And NodeJS Training !!",
         
            fname: "Tejasree",

            personDetails: {
                email: "teja.mb@incedoinc.com",
                city: "Chennai",
            },

            subjects : ["ReactJS " ," Spring", " Angular"],
            
            Person: {
                "fname": "Wenjie",
                "lname": "Cummins",
                "tel": "(758)273-9014",
                "address": "4402 Tortor Rd",
                "city": "Mystic",
                "state": "ND",
                "zip": 85584
            },
        
        };
        
        this.showMessage = this.showMessage.bind(this);
    }

    showMessage() {
        this.setState({ isShowMesagge: true });
      }

    render(){
        const { WelcomeMessage } = this.state;

        return (
            <div>
                <h2>{this.state.fname}</h2>
                <h2>{this.state.personDetails.email}</h2>
                <h2>{this.state.personDetails.city}</h2>
                <h2>{this.state.subjects}</h2>

                <h1>{this.state.subjects.map((val,i) => {
                return <li key ={i}> {val}</li>
                })}</h1>

               <ul>
                {Object.keys(this.state.Person).map((val,i)=>{
                    return <li>{this.state.Person[val]}</li>
                })}
               </ul>

        <button onClick={this.showMessage}>Show Message</button>
        {this.state.isShowMesagge && <h2>{WelcomeMessage}</h2>}

            </div>
        );
    }
}

export default Person;