import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Form = (options, thisValue) => {
  const renderEnumerations = () => {
    return options;
  };

  const renderShowInput = () => {
    if (thisValue) {
      return (
        <Col xs={12} className="Show-inputs">
          <button onClick={thisValue.showInputs.bind(thisValue)} className={thisValue.state.formVisible ? 'hide-item' : 'option-button'}>
            <i className="fa fa-angle-double-down" />
          </button>
          <button onClick={thisValue.hideInputs.bind(thisValue)} className={!thisValue.state.formVisible ? 'hide-item' : 'option-button'}>
            <i className="fa fa-angle-double-up" />
          </button>
        </Col>
      );
    }
    return null;
  };
  return (locals) => {
    let formNotVisible;
    if (thisValue) {
      formNotVisible = !thisValue.state.formVisible;
    } else {
      formNotVisible = true;
    }
    return (
      <div>
        <Grid className="Input-grid">
          <Row>
            {renderShowInput()}
          </Row>
          <Row className="Attribute-rows">
            <Col xs={4}>
              <div>{locals.inputs.name}</div>
            </Col>
            <Col xs={8}>
              <div>{locals.inputs.description}</div>
            </Col>
          </Row>
          <Row className={formNotVisible ? 'hide-item' : 'Attribute-rows'}>
            <Col xs={5}>
              <div>{locals.inputs.deviceResourceType}</div>
            </Col>
            <Col xs={7}>
              <div>{locals.inputs.defaultValue}</div>
            </Col>
          </Row>
          <Row className={formNotVisible ? 'hide-item Attribute-rows' : 'Attribute-rows'}>
            <Col xs={6}>
              <div>{locals.inputs.dataType}</div>
            </Col>
            <Col xs={6}>
              <div>{locals.inputs.format}</div>
            </Col>
          </Row>
          <Row className={formNotVisible ? 'hide-item Attribute-rows' : 'Attribute-rows'}>
            <Col xs={4}>
              <div>{locals.inputs.enumerationsData}</div>
            </Col>
            {renderEnumerations()}
          </Row>
          <Row className={formNotVisible ? 'hide-item Attribute-rows' : 'Attribute-rows'}>
            <Col xs={6}>
              <div>{locals.inputs.rangeMin}</div>
            </Col>
            <Col xs={6}>
              <div>{locals.inputs.rangeMax}</div>
            </Col>
          </Row>
          <Row className={formNotVisible ? 'hide-item Attribute-rows' : 'Attribute-rows'}>
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
      </div>
    );
  };
};


export default Form;
