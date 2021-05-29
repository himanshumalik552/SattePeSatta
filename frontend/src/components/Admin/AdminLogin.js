
import React from "react";
import  Form  from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";


const AdminLogin = () => {


  return (
    <>
      <h1 style={{textAlign: "center" , color:"white"}} > Admin Login </h1>
       
      <Container style={{marginBottom:"50px",  textAlign: "center"}}  > 
      <div className="Admin_main_div" >
      <div className="Admin_inner_div"> 
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="label">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="label">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {/* <Button  variant="primary" type="submit" onClick={Admin_route} >
          Submit
        </Button> */}
        <Nav.Link className="link" href="/Admin">Submit</Nav.Link>
      </Form>
      </div>
      </div>
      </Container>
      </>
  );
};

export default AdminLogin;
