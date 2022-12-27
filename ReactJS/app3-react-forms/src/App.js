import logo from "./logo.svg";
import "./App.css";
import User from "./Components/User";
import { RegisterClass } from "./Components/RegisterClass";
import { Registration } from "./Components/Registration";
import { RegisterFunction } from "./Components/Registerfunction";

function App() {
  return (
    <div className="App">
      {/* <User /> */}
      {/* <RegisterClass />
      <Registration /> */}
      <RegisterFunction />
    </div>
  );
}

export default App;
