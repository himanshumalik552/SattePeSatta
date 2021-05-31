import React, { useState, useEffect } from "react";
import { Container, Col, Form, Button, Table } from "react-bootstrap";
import axios from "axios";
const Admin = () => {

  //POST DATA//
  const [input, setInput] = useState({
    uttarpradesh: "",
    haryana: "",
    uttarakhand: "",
    punjab: "",
    madhyapradesh: "",
    bihar: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    alert("Data Save Successful:");
    event.preventDefault();
    const newState = {
      uttarpradesh: input.uttarpradesh,
      haryana: input.haryana,
      uttarakhand: input.uttarakhand,
      punjab: input.punjab,
      madhyapradesh: input.madhyapradesh,
      bihar: input.bihar,
    };
    axios.post("http://localhost:3001/create", newState);
  }
//GET DATA//
    const [states, setStates] = useState([{
      uttarpradesh: "",
      haryana: "",
      uttarakhand: "",
      punjab: "",
      madhyapradesh: "",
      bihar: "",
    }])

    useEffect(()=>{
      fetch("/states").then(res => {
        if(res.ok){
          return res.json()
        }
      }).then (jsonRes => setStates(jsonRes));
    })

  return (
    <div>
      <h1>Admin Login successful</h1>

      <Container style={{ textAlign: "center", marginBottom: "20px" }}>
        <div className="Admin_main_div">
          <div className="Admin_inner_div">
            <Form>
              <Form.Label className="label">UttarPradesh:</Form.Label>
              <Col sm="13">
                <Form.Control
                  onChange={handleChange}
                  value={input.uttarpradesh}
                  name="uttarpradesh"
                  type="number"
                  placeholder="Enter Number"
                />
              </Col>

              <Form.Label className="label">Haryana:</Form.Label>
              <Col sm="13">
                <Form.Control
                  onChange={handleChange}
                  value={input.haryana}
                  name="haryana"
                  type="text"
                  placeholder="Enter Number"
                />
              </Col>

              <Form.Label className="label">Uttarakhand:</Form.Label>
              <Col sm="13">
                <Form.Control
                  onChange={handleChange}
                  value={input.uttarakhand}
                  name="uttarakhand"
                  type="text"
                  placeholder="Enter Number"
                />
              </Col>

              <Form.Label className="label">Punjab:</Form.Label>
              <Col sm="13">
                <Form.Control
                  onChange={handleChange}
                  value={input.punjab}
                  name="punjab"
                  type="text"
                  placeholder="Enter Number"
                />
              </Col>

              <Form.Label className="label">MadhyaPradesh:</Form.Label>
              <Col sm="13">
                <Form.Control
                  onChange={handleChange}
                  value={input.madhyapradesh}
                  name="madhyapradesh"
                  type="text"
                  placeholder="Enter Number"
                />
              </Col>

              <Form.Label className="label">Bihar:</Form.Label>
              <Col sm="13">
                <Form.Control
                  onChange={handleChange}
                  value={input.bihar}
                  name="bihar"
                  type="text"
                  placeholder="Enter Number"
                />
              </Col>

              <Button
                className="button"
                onClick={handleClick}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>

        <div>
          <Table className="table" striped bordered hover>
            <thead>
              <tr style={{ fontSize: "30px" }}>
                <th>uttarpradesh</th>
                <th>haryana</th>
                <th>uttarakhand</th>
                <th>punjab</th>
                <th>madhyapradesh</th>
                <th>bihar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              {states.map(states=>
              <>
                <td>{states.uttarpradesh}</td>
                <td>{states.haryana}</td>
                <td>{states.uttarakhand}</td>
                <td>{states.punjab}</td>
                <td>{states.madhyapradesh}</td>
                <td>{states.bihar}</td>
                </>
              )}

              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default Admin;
