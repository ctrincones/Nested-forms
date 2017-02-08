import t from 'tcomb-form';

const defaultStruct = {
  name: t.String,
  description: t.String,
  deviceResourceType: t.Str,
  defaultValue: t.String,
  dataType: t.Str,
  format: t.Str,
};

export const getBaseStruct = () => {
  const baseStruct = t.struct(defaultStruct);
  return baseStruct;
};

export const getDataTypeStringNoneStruct = () => {
  const struct = { ...defaultStruct };
  struct.enumerationsData = t.maybe(t.String);
  const dataTypeStringNoneStruct = t.struct(struct);
  return dataTypeStringNoneStruct;
};

export const getDataTypeStringNumberStruct = (rangeMin, rangeMax) => {
  const rangeMinValue = parseInt(rangeMin, 10);
  const rangeMaxValue = parseInt(rangeMax, 10);
  const rangeMinValidation = t.refinement(t.Number, (value) => {
    return rangeMinValue < rangeMaxValue;
  });
  console.log(parseInt(rangeMax, 10));
  const struct = { ...defaultStruct };
  struct.rangeMin = rangeMinValidation;
  struct.rangeMax = t.Number;
  struct.unitOfMeasurement = t.String;
  struct.precision = t.Number;
  struct.accuracy = t.Number;
  const dataTypeStringNumberStruct = t.struct(struct);
  return dataTypeStringNumberStruct;
};
