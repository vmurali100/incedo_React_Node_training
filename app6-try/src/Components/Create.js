import React, { useState } from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../Constants/URL";

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const postData = async () => {
    await axios.post(API_URL, {
      firstName,
      lastName,
      checked,
    })
    navigate('/read')
  };

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
      <Button onClick={postData}>Submit</Button>
    </Form>
  );
}

export default Create;
