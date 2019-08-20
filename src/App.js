import React from "react";
import "./App.css";
import { Container, Row, Col, Button } from "design-react-kit";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "typeface-titillium-web";
import "typeface-roboto-mono";
import "typeface-lora";

function App() {
  return (
    <Container className="p-3">
    <Col>
    <h1 className='text-center'>Design-react-kit</h1>
      <h3 className="pt-5 pb-3">Different types of Buttons</h3>
      <Row>
        <div className="pr-3">
        <Button color="primary">Primary</Button>
        </div>
        <div className="pr-3">
        <Button color="primary" outline>Primary Outline</Button>
        </div>
        <div className="pr-3">
        <Button color="secondary">Secondary</Button>
        </div>
        <div className="pr-3">
        <Button color="secondary" outline>Secondary Outline</Button>
        </div>
        <div className="pr-3">
        <Button color="success">Success</Button>
        </div>
        <div className="pr-3">
        <Button color="success" outline>Success Outline</Button>
        </div>
      </Row>
      </Col>  
    </Container>
  );
}

export default App;
