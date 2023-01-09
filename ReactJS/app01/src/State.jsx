import React from 'react'

class State extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Nanditha",
            isShowMsg:false,
            subjects:["mat","sci","soc"],
            person:{
                fname:"Nanditha",
                lname:"P",
                tel:"12356709"
            }
        }
    }

    render(){

        return <div>

            <h2>{this.state.name}</h2>
            <h2>{this.state.subjects.map((val,i)=> <li key={i}> {val}</li> )}</h2>

            {Object.values(this.state.person).map((user,i) => {
                return <p key={i}> {user}</p>
            } )

            }
        </div>
    }
}

export default State