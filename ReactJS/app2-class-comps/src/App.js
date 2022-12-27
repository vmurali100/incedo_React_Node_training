import "./App.css";
import { Parent } from "./Components/Parent";
import { Person } from "./Components/Person";
import User, { MainUser, OtherUser } from "./Components/User";

function App() {
  return (
    <div className="App">
      <Person />
      <Parent />
      {/* <User/>
      <MainUser/>
      <OtherUser/> */}
    </div>
  );
}

export default App;
