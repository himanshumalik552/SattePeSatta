import React from "react";
import Container from "react-bootstrap/Container";
import CardData from "../CardData";
import Cards from "./Cards";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Section1 from './Section1'
const CityCards = () => {
  return (
    <>
    <Section1 header="Welcome TO Satta up" title="Dreams Goes True Here "/>
      <Container style={{marginBottom:"30px"}} >
        <Row style={{marginLeft: "22px", marginTop: "22px"}}>
        {CardData.map((value,index) =>

         <Col>
         <Cards key={index} img={value.img} title={value.title} text={value.text} link={value.link} />
         </Col>
          )};
        </Row>
      </Container>
    </>
  );
};

export default CityCards;
