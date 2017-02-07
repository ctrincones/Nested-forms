import t from 'tcomb-form';

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
  { value: 'NONE', text: 'NONE' },
];
