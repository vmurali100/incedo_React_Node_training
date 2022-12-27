import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent from './components/Parent';
import Froms from './components/Forms';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <ChrisClass />
   <Chris/> */}
   <Froms/>
   <Profiler id="Testings" onRender={(id, phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions)=>
  {
    console.log("TESTINGS ",id)
    console.log("Phase",phase)
    console.log("actualDuration ",actualDuration);
    console.log("baseDuration",baseDuration)

  }}>
   <Parent/>
   </Profiler>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
