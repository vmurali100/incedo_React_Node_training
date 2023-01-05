import {useSelector} from "react-redux";

function App() {
  const userList =useSelector((state) =>state.users.value)
  return (
    <div className="App">
      <h1>Redux toolkit</h1>
      <div className="addUser">
        Name:
        <input type="text"  placeholder="Enter your name"/><br></br>
        User Name:
        <input type="text"  placeholder="Enter your username"/><br></br>
        <button>Submit</button>
      </div>
      <div className="displayUsers">
        {userList.map((user)=>{
          return<h1>{user.name}</h1>
        })}
      </div>
      
    </div>
  );
}

export default App;
