import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserAsyncAction } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

export const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({ fname: "", lname: "", email: "" });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    const resp = await dispatch(addUserAsyncAction(user));
    navigate("/");
  };
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            name="fname"
            value={user.fname}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            name="lname"
            value={user.lname}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div></div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
