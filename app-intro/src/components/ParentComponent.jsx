import React,{Component} from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component
{
   constructor(props)
   {
      super(props);
      this.state={
        welcome:"This is a React.Js Training!!!",
        reactJS:{
            timings:"09:30AM to 01:30PM",
            trainingDuration:"20hrs"
        },
        topics:["Basics","HOC","Context API","Axios","Redux"]
      }
   }

   changeWelcome = ()=>
   {
      this.setState({welcome:"The welcome state is changed"});
   }

   changereactJS = ()=>
   {
     //console.log(prevState);
    //  this.setState(prevState=>({
    //      reactJS:{
    //         ...prevState.reactJS,timings:"10:00AM to 1:30PM",trainingDuration:"24hrs"
    //              }
    //  }));
    // console.log("inside change reactJS");
    // this.setState({...this.state.reactJS, timings:"10:00AM to 01:30PM"});
    this.setState({
        reactJS: {
              ...this.state.reactJS,
              timings: "10:00AM to 02:30PM",
              trainingDuration:"24hrs"
        }
    })
   }

   changeTopics= ()=>
   {
     const array = [...this.state.topics,"parentComponents"];
     const test = array.splice(0,1); 
     console.log(test);
     this.setState({topics:[...array]});
   };

//    changetopics = ()=>{
//       for(let i=0;i<this.state.topics.length;i++)
//       {
//         this.setState({topics[i],"reactJs"});
//       }
//    }

   render()
   {
    return <>
           <ChildComponent {...this.state} handleState={this.changeWelcome} handlereactjs={this.changereactJS} handletopics={this.changeTopics} />
           </>
   }
}

export default ParentComponent;
