import t from 'tcomb-form';
import { deviceResourceTypeOptions } from './options';

const enumDataRule = t.refinement(t.String, (value) => {
  return value.length > 4;
});

export const baseStruct = t.struct({
  name: t.String,
  description: t.String,
  deviceResourceType: deviceResourceTypeOptions,
  defaultValue: t.String,
  dataType: t.Str,
  format: t.Str,
});

export const dataTypeStringNoneStruct = t.struct({
  name: t.String,
  description: t.String,
  deviceResourceType: t.Str,
  defaultValue: t.String,
  dataType: t.Str,
  format: t.Str,
  enumerationsData: enumDataRule,
});
