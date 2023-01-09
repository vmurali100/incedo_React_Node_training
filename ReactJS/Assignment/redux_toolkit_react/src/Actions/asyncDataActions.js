import axios from "axios";
import { setUser } from "../Slices/dataSlice";
export const getData = () => (dispatch) => {
  axios
    .get("http://localhost:3000/product")
    .then((res) => {
      dispatch(setUser(res.data));
    })
    .catch((err) => console.log(err));
};
export const getDataFromAPI = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      dispatch(setUser(res.data));
    })
    .catch((err) => console.log(err));
};
export const deleteData = (id) => (dispatch) => {
  axios
    .delete("http://localhost:3000/product/delete/" + id)
    .then((res) => {
      console.log(res.data);
      dispatch(getData());
    })
    .catch((err) => console.log(err));
};
export const updateData = (id, data) => (dispatch) => {
  axios
    .put("http://localhost:3000/product/put/" + id, data)
    .then((res) => {
      console.log(res.data);
      dispatch(getData());
    })
    .catch((err) => console.log(err));
};
export const addData = (data) => (dispatch) => {
  axios
    .post("http://localhost:3000/product/create", data)
    .then((res) => {
      console.log(res.data);
      dispatch(getData());
    })
    .catch((err) => console.log(err));
};
