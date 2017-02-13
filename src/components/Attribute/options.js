import React from 'react';
import t from 'tcomb-form';
import Layout from './Layout/Form';
import { validationStandardError } from './variables';

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

export const formOptions = (options, thisValue) => {
  return {
    template: Layout(options, thisValue),
    fields: {
      name: {
        error: validationStandardError,
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
      },
      enumerationsData: {
        label: 'Enumerations',
      },
      rangeMin: {
        error: <i>Invalid value Range min has to be lower than Range max and its required</i>,
      },
      rangeMax: {
        error: <i>Invalid value Range max has to be higher than Range min and its required</i>,
      },
      unitOfMeasurement: {
        error: validationStandardError,
      },
      precision: {
        error: validationStandardError,
      },
      accuracy: {
        error: validationStandardError,
      },
    },
  };
};
