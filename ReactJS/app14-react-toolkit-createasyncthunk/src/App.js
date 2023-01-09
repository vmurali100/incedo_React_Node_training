import logo from "./logo.svg";
import "./App.css";
import Users from "./components/Users";
import { UsersTable } from "./components/UsersTable";

function App() {
  return (
    <div className="App">
      <Users />
      <UsersTable />
    </div>
  );
}

export default App;
