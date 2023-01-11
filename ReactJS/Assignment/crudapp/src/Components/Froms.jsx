import { useNavigate } from "react-router-dom";

const { useState } = require("react");
const { useDispatch } = require("react-redux");
const { addData } = require("../Reducers/userSlice");
const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  number: "",
};
function Forms() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);
  const navigate=useNavigate();
  const handleCreate =async () => {
   await  dispatch(addData(user));
    clearForm()
    navigate("/")

  };
  const onChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  const clearForm=()=>
  {
    setUser(initialState);
  }
  return (
    <>
      <form>
        <label htmlFor="firstname">First Name : </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          onChange={(e) => onChange(e)}
          value={user.firstname}
        />{" "}
        <br />
        <br />
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          onChange={(e) => onChange(e)}
          value={user.lastname}
        />{" "}
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => onChange(e)}
          value={user.email}
        />{" "}
        <br />
        <br />
        <label htmlFor="number">Mobile Number:</label>
        <input
          type="number"
          name="number"
          id="number"
          onChange={(e) => onChange(e)}
          value={user.number}
        />{" "}
        <br />
        <br />
        <button type="button" onClick={handleCreate}>
          Create
        </button>
      </form>
    </>
  );
}
export default Forms;
