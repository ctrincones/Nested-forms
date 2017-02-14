import React from 'react';
import t from 'tcomb-form';
import Layout from './Layout/Form';
import { validationStandardError,
  nameValidationError,
  precisionError,
  rangeMinError,
  rangeMaxError,
  accuracyError } from './variables';

export const deviceResourceTypeOptions = [
  { value: 'DEFAULT VALUE', text: 'DEFAULT VALUE' },
];

export const dataTypeOptions = [
  { value: 'string', text: 'STRING' },
  { value: 'object', text: 'OBJECT' },
];

export const stringFormatOptions = [
  { value: 'none', text: 'NONE' },
  { value: 'number', text: 'NUMBER' },
  { value: 'boolean', text: 'BOOLEAN' },
  { value: 'date-time', text: 'DATE-TIME' },
  { value: 'cdata', text: 'CDATA' },
  { value: 'uri', text: 'URI' },
];

export const objectFormatOptions = [
  { value: 'none', text: 'NONE' },
];

export const formOptions = (options, thisValue, disableFormatAndDefault) => {
  const disableFormatAndDefaultValue = false || disableFormatAndDefault;
  return {
    template: Layout(options, thisValue),
    fields: {
      name: {
        error: nameValidationError,
      },
      description: {
        error: validationStandardError,
      },
      deviceResourceType: {
        disabled: true,
        nullOption: false,
        label: 'Device resource type:',
        factory: t.form.Select,
        options: deviceResourceTypeOptions,
      },
      defaultValue: {
        label: 'Default value:',
        error: validationStandardError,
        disabled: disableFormatAndDefaultValue,
      },
      dataType: {
        factory: t.form.Select,
        options: dataTypeOptions,
        nullOption: false,
        label: 'Data Type',
      },
      format: {
        factory: t.form.Select,
        options: stringFormatOptions,
        nullOption: false,
        disabled: disableFormatAndDefaultValue,
      },
      enumerationsData: {
        label: 'Enumerations',
      },
      rangeMin: {
        error: rangeMinError,
      },
      rangeMax: {
        error: rangeMaxError,
      },
      unitOfMeasurement: {
        error: validationStandardError,
      },
      precision: {
        error: precisionError,
      },
      accuracy: {
        error: accuracyError,
      },
    },
  };
};
