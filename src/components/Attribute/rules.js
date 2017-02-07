import t from 'tcomb-form';
import { deviceResourceTypeOptions } from './options';

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
  deviceResourceType: deviceResourceTypeOptions,
  defaultValue: t.String,
  dataType: t.Str,
  format: t.Str,
  enumerationsData: t.String,
});
