import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "semantic-ui-react";
import { API_URL } from "../Constants/URL";

function Read() {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();


  const deleteUser = async (id) => {
    await axios.delete(API_URL +id)
    callGetApi()
  }

  const updateUser = async({firstName,lastName,checked,id}) => {
    localStorage.setItem('id',id)
    localStorage.setItem('firstName',firstName)
    localStorage.setItem('lastName',lastName)
    localStorage.setItem('checked',checked)
    navigate('/update')

  }

  const callGetApi = async () => {
    const res = await axios.get(API_URL);
    setApiData(res.data);
  };

  useEffect(() => {
    callGetApi();
  }, []);
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>First name</Table.HeaderCell>
          <Table.HeaderCell>Last name</Table.HeaderCell>
          <Table.HeaderCell>Checked</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {apiData.map((data, i) => (
          <Table.Row key={i}>
            <Table.Cell>{data.firstName}</Table.Cell>
            <Table.Cell>{data.lastName}</Table.Cell>
            <Table.Cell>{data.checked ? "Checked" : "Not checked"}</Table.Cell>
            <Table.Cell>
              <Button onClick={() => deleteUser(data.id)}>Delete</Button>
            </Table.Cell>
            <Table.Cell>
              <Button onClick={() => updateUser(data)}>Update</Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default Read;
