import React,{Component} from 'react';

class ChildComponent extends Component
{
  constructor(props)
  {
    super(props);
    console.log(this.props);
  }
  render()
  {
    return <>
           <button onClick={this.props.handleState}>Change the prop from child component</button>
           <button onClick={this.props.handlereactjs}>Change the reactJS prop from child component</button>
           <button onClick={this.props.handletopics}>Change the Topics prop from child component</button>
           <h3>{this.props.welcome}</h3>
           <h3>{this.props.reactJS.timings}</h3>
           <h3>{this.props.reactJS.trainingDuration}</h3>
           <ul>
           {Object.keys(this.props.reactJS).map((val,i)=>{return <li key={i}>{this.props.reactJS[val]}</li>})}
           </ul>
           <h3>The Content that is going to be teached in trainig :</h3>
           <ol>
             {this.props.topics.map((val,i)=>{return <li key={i}>{val}</li>})}
           </ol>
           </>
  }
}

export default ChildComponent;