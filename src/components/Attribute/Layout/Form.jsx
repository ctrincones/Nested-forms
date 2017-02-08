import React from 'react';

const Form = (locals) => {
  return (
    <div>
      <div>{locals.inputs.name}</div>
      <div>{locals.inputs.description}</div>
      <div>{locals.inputs.defaultValue}</div>
      <div>{locals.inputs.deviceResourceType}</div>
      <div>{locals.inputs.dataType}</div>
      <div>{locals.inputs.format}</div>
      <div>{locals.inputs.enumerationsData}</div>
      <div>{locals.inputs.rangeMin}</div>
      <div>{locals.inputs.rangeMax}</div>
      <div>{locals.inputs.unitOfMeasurement}</div>
      <div>{locals.inputs.precision}</div>
      <div>{locals.inputs.accuracy}</div>
    </div>
  );
};

export default Form;
