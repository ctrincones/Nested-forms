import React from 'react';

const Form = (locals) => {
  return (
    <div>
      <div>{locals.inputs.name}</div>
      <div>{locals.inputs.description}</div>
      <div>{locals.inputs.defaultValue}</div>
      <div>{locals.inputs.dataType}</div>
      <div>{locals.inputs.format}</div>
      <div>{locals.inputs.enumerationsData}</div>
    </div>
  );
};

export default Form;
