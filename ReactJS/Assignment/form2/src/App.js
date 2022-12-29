import logo from "./logo.svg";
import "./App.css";
import { Functional } from "./components/Functional";
import Classcomp from "./components/ClassComp";

function App() {
  return (
    <div
      className="container text-left"
      style={{ border: "1px solid black", width: "50%" }}
    >
      <Functional />
      {/* <Classcomp /> */}
    </div>
  );
}

export default App;
