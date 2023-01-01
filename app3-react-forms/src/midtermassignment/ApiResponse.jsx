import React,{Component} from 'react';
import axios from 'axios';

class ApiResponse extends Component
{
    constructor(props)
     {
        super(props);
        this.state={
            apidata:[]
        };
     };

     componentDidMount()
     {
        axios.get("http://localhost:3000/users").then((response)=>{
            this.setState({apidata:response.data});
        })
     }

     render()
     {
        return<div>
              <ol>
                {this.state.apidata.map((value,i)=>(<li>{JSON.stringify(value)}</li>))}
              </ol>
              </div>
     }
};

export default ApiResponse;