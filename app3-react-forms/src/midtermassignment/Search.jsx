import React,{Component} from 'react';

class Search extends Component
{
    constructor(props)
     {
        super(props);
        this.state={
            searchArray:['naveen','search1','search2','search3','raj','murali'],
            search:''

        };
     };

     

     render()
     {
        return<div>
              <input type="text" onChange={(e)=>{this.setState({search:e.target.value})}} />
              {this.state.searchArray.filter((value)=>{
                if(this.state.search === value)
                {
                    return true;
                }
              })}
              </div>
     }
};

export default Search;