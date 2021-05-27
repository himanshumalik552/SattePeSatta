import React from "react";
import Button from "react-bootstrap/Button";
import { Card, } from "react-bootstrap";




const Cards = (props) => {
  return (
    <>
    
            <Card className="" style={{ width: "16rem", marginTop: "10px" }}>
              <Card.Img
                variant="top"
                src= {props.img}/>
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Button variant="primary">See Result</Button>
              </Card.Body>
            </Card>
         
      </>
  );
};

export default Cards;
