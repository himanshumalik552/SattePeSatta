import React from "react";
import Nav from "react-bootstrap/Nav";
import { Card, } from "react-bootstrap";

const Cards = (props) => {
  return (
    <>
    
            <Card className="" style={{ width: "18rem", marginTop: "10px" }}>
              <Card.Img
                variant="top"
                src= {props.img}/>
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Nav.Link className="link" href={props.link}>Result</Nav.Link>
              </Card.Body>
            </Card>
         
      </>
  );
};

export default Cards;
