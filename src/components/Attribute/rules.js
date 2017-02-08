import t from 'tcomb-form';

const enumDataRule = t.refinement(t.String, () => {
  return true;
});

export const getBaseStruct = () => {
  const baseStruct = t.struct({
    name: t.String,
    description: t.String,
    deviceResourceType: t.Str,
    defaultValue: t.String,
    dataType: t.Str,
    format: t.Str,
  });
  return baseStruct;
};

export const dataTypeStringNoneStruct = t.struct({
  name: t.String,
  description: t.String,
  deviceResourceType: t.Str,
  defaultValue: t.String,
  dataType: t.Str,
  format: t.Str,
  enumerationsData: enumDataRule,
});

export const dataTypeStringNumberStruct = t.struct({
  name: t.String,
  description: t.String,
  deviceResourceType: t.Str,
  defaultValue: t.String,
  dataType: t.Str,
  format: t.Str,
  rangeMin: t.Number,
  rangeMax: t.Number,
  unitOfMeasurement: t.String,
  precision: t.Number,
  accuracy: t.Number,
});
