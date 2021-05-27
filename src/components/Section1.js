import React from 'react'
import Container from 'react-bootstrap/Container';
import '../Mix.css';

const Section1 = (props) => {
    return (
   <>
 <Container style= {{textAlign: "center"}}>
<div className="S1main_div" >
  <div className="S1inner_div">
      <h1 class="">{props.header}</h1>
      <h4>
       {props.title}
      </h4>
      </div>
</div>
 </Container>
 </>
    )
}

export default Section1;
