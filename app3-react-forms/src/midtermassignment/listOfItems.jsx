import React,{Component} from 'react';

class ListOfItems extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            items:['item1','item2','item3','item4']
        };
    }
     render()
     {
        return <div>
               <ol>
               {this.state.items.map((value,i)=>(<li key={i}>{value}</li>))}
               </ol>
               </div>
     }
};
export default ListOfItems;

