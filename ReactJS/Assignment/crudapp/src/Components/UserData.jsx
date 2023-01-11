import { useEffect } from "react";
import { getData, deleleteData } from "../Reducers/userSlice";

import { useNavigate } from "react-router-dom";
const { useSelector, useDispatch } = require("react-redux");
function UserData() {
  const data = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {!!data &&
            data.map((user) => {
              return (
                <tr key={user.email}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.number}</td>
                  <td>
                    <button onClick={() => navigate("/edit", { state: user })}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={ () => {
                      dispatch(deleleteData(user.email));
                       
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
export default UserData;
