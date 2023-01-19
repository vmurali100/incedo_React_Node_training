import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { updateUserAsyncAction } from "../store/userSlice";
import UserForm from "./UserForm";

const EditUser = () => {
    const { state } = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", email: "", mobileno: "" });

    useEffect(() => {
        setUser(state);
    }, []);

    const handleChange = (e) => {
        let newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    };

    const handleSubmit = () => {
        dispatch(updateUserAsyncAction(user));
        navigate('/');
    };
    return (
        <div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <UserForm user={user} handleChange={handleChange} handleSubmit={handleSubmit} />
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default EditUser;