import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Form = (locals) => {
  return (
    <Grid className="Input-grid">
      <Row className="Attribute-rows">
        <Col xs={4}>
          <div>{locals.inputs.name}</div>
        </Col>
        <Col xs={8}>
          <div>{locals.inputs.description}</div>
        </Col>
      </Row>
      <Row className="Attribute-rows">
        <Col xs={5}>
          <div>{locals.inputs.deviceResourceType}</div>
        </Col>
        <Col xs={7}>
          <div>{locals.inputs.defaultValue}</div>
        </Col>
      </Row>
      <Row className="Attribute-rows">
        <Col xs={6}>
          <div>{locals.inputs.dataType}</div>
        </Col>
        <Col xs={6}>
          <div>{locals.inputs.format}</div>
        </Col>
      </Row>
      <Row className="Attribute-rows">
        <Col xs={4} xsOffset={4}>
          <div>{locals.inputs.enumerationsData}</div>
        </Col>
      </Row>
      <Row className="Attribute-rows">
        <Col xs={6}>
          <div>{locals.inputs.rangeMin}</div>
        </Col>
        <Col xs={6}>
          <div>{locals.inputs.rangeMax}</div>
        </Col>
      </Row>
      <Row className="Attribute-rows">
        <Col xs={4}>
          <div>{locals.inputs.unitOfMeasurement}</div>
        </Col>
        <Col xs={4}>
          <div>{locals.inputs.precision}</div>
        </Col>
        <Col xs={4}>
          <div>{locals.inputs.accuracy}</div>
        </Col>
      </Row>
    </Grid>
  );
};

export default Form;
