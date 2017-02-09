import React from 'react';
import t from 'tcomb-form';
import Layout from './Layout/Form';

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

export const formOptions = {
  template: Layout,
  fields: {
    name: {
      error: <i>Required field</i>,
    },
    description: {
      error: <i>Required field</i>,
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
      error: <i>Required field</i>,
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
      error: <i>Required field</i>,
    },
    precision: {
      error: <i>Invalid input</i>,
    },
    accuracy: {
      error: <i>Required field</i>,
    },
  },
};
