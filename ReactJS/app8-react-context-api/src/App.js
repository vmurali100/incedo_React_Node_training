import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { UseContextProvider } from "./components/UseContext";
import { Main } from "./components/Main";
function App() {
  const [users, setUsers] = useState([
    "Arun",
    "Kumar",
    "Sam",
    "Sundar",
    "Ravi",
  ]);
  return (
    <div className="App">
      <h2>Welcome to App Component</h2>
      <hr />
      {/* <Main users={users}/> */}
      <UseContextProvider value={users}>
        <Main />
      </UseContextProvider>
    </div>
  );
}
export default App;
