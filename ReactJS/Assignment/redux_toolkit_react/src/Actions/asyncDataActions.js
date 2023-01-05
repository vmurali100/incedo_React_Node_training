import axios from "axios";
import { setUser } from "../Slices/dataSlice";
export const getData = () => (dispatch) => {
  axios
    .get("http://localhost:3000/user")
    .then((res) => {
      dispatch(setUser(res.data));
    })
    .catch((err) => console.log(err));
};
export const deleteData = (id) => (dispatch) => {
  axios
    .delete("http://localhost:3000/user/" + id)
    .then((res) => {
      console.log(res.data);
      dispatch(getData());
    })
    .catch((err) => console.log(err));
};
export const updateData = (id, data) => (dispatch) => {
  axios
    .put("http://localhost:3000/user/" + id, data)
    .then((res) => {
      console.log(res.data);
      dispatch(getData());
    })
    .catch((err) => console.log(err));
};
export const addData = (data) => (dispatch) => {
  axios
    .post("http://localhost:3000/user", data)
    .then((res) => {
      console.log(res.data);
      dispatch(getData());
    })
    .catch((err) => console.log(err));
};
