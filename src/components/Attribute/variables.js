import React from 'react';

export const validationStandardError = <i>Required field</i>;
export const nameValidationError =
  <i>Required field, attributes names must be unique and cant be empty Strings</i>;
export const precisionError =
  (<i>
    Required field, Precision value must be a number
    that allows to go from through Range Min to Range Max without exceding it
  </i>);
export const accuracyError =
  (<i>
    Required field, Accuracy value must be a number
    that allows to go from through Range Min to Range Max without exceding it
  </i>);

export const rangeMinError =
  <i>Invalid value Range min has to be lower than Range max and its required</i>;

export const rangeMaxError =
  <i>Invalid value Range max has to be higher than Range min and its required</i>;
