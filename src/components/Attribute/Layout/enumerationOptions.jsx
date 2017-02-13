import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from 'muicss/lib/react/button';

export default (thisValue) => {
  console.log(thisValue.props.data.enumerations);
  const enumerationData = thisValue.props.data.enumerations.map((value, index) => {
    return (
      <div key={index} className="Enumeration-value">
        <p>{value} <button onClick={thisValue.deleteEnumerationValue.bind(thisValue, index)}><i className="fa fa-minus-circle Delete-icon" /></button></p>
      </div>
    );
  });
  return (
    <Col xs={4}>
      <Button
        color="primary"
        disabled={thisValue.state.enumerationsData === ''}
        onClick={thisValue.addEnumerationValue}
        className="Add-enumeration-button"
      >
      Add
      </Button>
      <div className="Enumerations-data">
        {enumerationData}
      </div>
    </Col>
  );
};
