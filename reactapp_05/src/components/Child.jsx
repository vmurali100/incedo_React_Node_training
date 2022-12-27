import React,{Component} from "react";

export default class Child extends Component{

    // constructor(props){

    //     super(props)

    //     this.state={



    //     }

       

    // }

    render(){

        const {reactJs,topics,welcome}=this.props;

        console.log(reactJs);

        console.log(topics)

        return(

            <div>

                <button onClick={this.props.handleChange}>Change Message</button>

                <h1>{welcome}</h1>

                <ul>

                    {topics.map((sub,i)=>{

                        return <li key={i}>{sub}</li>

                    })}

                </ul>

            </div>

        )

    }

}