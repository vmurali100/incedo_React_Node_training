import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addStudentAsyncAction,
  deleteStudent,
  getStudentAsyncAction,
} from "../store/StudentSlice";

const Student = () => {
  const StudentDetails = useSelector((state) => state.Student);
  const dispatch = useDispatch();
  const handleDelete = (i) => {
    dispatch(deleteStudent(i));
  };

  useEffect(() => {
    dispatch(getStudentAsyncAction());
  }, []);
  const addStudent = () => {
    dispatch(
      addStudentAsyncAction({
        id: null,
        email: "king.com",
        Studentname: "king",
        password: "1234",
      })
    );
  };
  return (
    <div className="container">
      <button onClick={addStudent} className="btn btn-primary">
        Add Student
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Student Name</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {StudentDetails.Student.map((Student, i) => (
            <tr key={i}>
              <td>{Student.id}</td>
              <td>{Student.email}</td>
              <td>{Student.Studentname}</td>
              <td>{Student.password}</td>
              <td>
                <button className="btn btn-warning">Edit Student</button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(i);
                  }}
                >
                  Delete Student
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
