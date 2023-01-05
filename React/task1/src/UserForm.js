import React from "react";
import { useState } from "react";

const UserForm = ({ user, handleChange, handleSubmit, updateUser, editIndex }) => {
  
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            ID
          </label>
          <input
            type="text"
            className="form-control"
            value={user.id}
            name="id"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">
             Name
          </label>
          <input
            type="text"
            className="form-control"
            value={user.fname}
            name="fname"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
             User Name
          </label>
          <input
            type="text"
            className="form-control"
            value={user.username}
            name="username"
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
            value={user.email}
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Address
          </label>
          <input
            type="address"
            className="form-control"
            value={user.address}
            name="address"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Company
          </label>
          <input
            type="company"
            className="form-control"
            value={user.company}
            name="company"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>

        
        
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

export default UserForm;