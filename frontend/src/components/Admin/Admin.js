import React from "react";
import { Container, Row, Col, Form, Nav } from "react-bootstrap";

const Admin = () => {
  return (
    <div>
      <h1>Admin Login successful</h1>

      <Container style={{ textAlign: "center", marginBottom: "20px" }}>
        <div className="Admin_main_div">
          <div className="Admin_inner_div">
            <Form>
              <Form.Group as={Row} controlId="formText">
                <Form.Label className="label">City NO:</Form.Label>
                <Col sm="9">
                  <Form.Control type="text" placeholder="Enter Number" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label className="label">City NO:</Form.Label>
                <Col sm="9">
                  <Form.Control type="text" placeholder="Enter Number" />
                </Col>
              </Form.Group>{" "}
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label className="label">City NO:</Form.Label>
                <Col sm="9">
                  <Form.Control type="text" placeholder="Enter Number" />
                </Col>
              </Form.Group>
              <Nav.Link className="link" href="/Admin">
                Submit
              </Nav.Link>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Admin;
