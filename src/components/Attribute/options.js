import t from 'tcomb-form';
import Layout from './Layout/Form';

export const deviceResourceTypeOptions = t.enums({
  deviceResouceType: 'DEFAULT VALUE',
});

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
    deviceResourceType: {
      disabled: true,
      nullOption: false,
      label: 'Device resource type:',
    },
    defaultValue: {
      label: 'Default value:',
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
  },
};
