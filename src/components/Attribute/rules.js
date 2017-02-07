import t from 'tcomb-form';
import { deviceResourceTypeOptions } from './options';

export const mainAttributes = t.struct({
  name: t.String,
  description: t.String,
  deviceResourceType: deviceResourceTypeOptions,
  defaultValue: t.String,
  dataType: t.Str,
  format: t.Str,
});
