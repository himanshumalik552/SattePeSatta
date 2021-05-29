import React from "react";
import { Container, Button } from "react-bootstrap";
const Punjab = (props) => {
  const [Number, setNumber] = React.useState("00");

  const changeNumber = (props) => {
    setNumber("75");
  };
  return (
    <div>
      <Container style={{ textAlign: "center", marginBottom: "200px" }}>
        <div className="C1main_div">
          <div className="C1inner_div">
            <h1 class=""> Welcome to Punjab </h1>
            <h1 class="cityNo">{Number} </h1>
            <Button onClick={changeNumber}> See Result</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Punjab;