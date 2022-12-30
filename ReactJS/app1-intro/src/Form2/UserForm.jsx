import React from "react";
import { useState } from "react";

const UserForm = ({ user, handleChange, handleSubmit, updateUser, editIndex }) => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={user.name}
                        name="name"
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
                    <label htmlFor="address" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={user.address}
                        name="address"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Phone
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={user.phone}
                        name="phone"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="website" className="form-label">
                        Website
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={user.website}
                        name="website"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="company" className="form-label">
                        Company
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={user.company}
                        name="company"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                {editIndex !== null ? (
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={updateUser}
                    >
                        Update User
                    </button>
                ) : (
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                )}
            </form>
        </div>
    );
};

export default UserForm;
