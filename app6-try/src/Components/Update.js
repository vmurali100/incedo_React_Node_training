import React, { useEffect, useState } from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import { API_URL } from "../Constants/URL";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checked, setChecked] = useState(false);
  const [id, setId] = useState("");
  const navigate = useNavigate();


  const updateUser = async () => {
    await axios.put(API_URL + id, {
      firstName,
      lastName,
      checked,
    })
    navigate('/read')
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setChecked(localStorage.getItem("checked"));
    setId(localStorage.getItem("id"));
  }, []);
  return (
    <Form className="form">
      <Form.Field>
        <label>First name :</label>
        <input
          onChange={(event) => setFirstName(event.target.value)}
          value={firstName}
          type="text"
          placeholder="Enter your first name"
        />
      </Form.Field>{" "}
      <br />
      <Form.Field>
        <label>Last name :</label>
        <input
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
          type="text"
          placeholder="Enter your last name"
        />
      </Form.Field>
      <br />
      <Form.Field>
        <Checkbox
          onChange={() => setChecked(!checked)}
          checked={checked}
          label="Agree to terms and conditions"
        />
      </Form.Field>
      <br />
      <Button onClick={updateUser}>Update</Button>
    </Form>
  );
}

export default Update;
