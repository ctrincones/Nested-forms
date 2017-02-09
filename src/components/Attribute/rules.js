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
  const rangeMinValue = parseFloat(rangeMin);
  const rangeMaxValue = parseFloat(rangeMax);
  const rangeMinValidation = t.refinement(t.Number, (value) => {
    return value < rangeMaxValue;
  });
  const rangeMaxValidation = t.refinement(t.Number, (value) => {
    return value > rangeMinValue;
  });
  const precisionAndAccuracyValidation = t.refinement(t.Number, (value) => {
    const range = rangeMaxValue - rangeMinValue;
    const modulus = range % value;
    return modulus === 0;
  });
  const struct = { ...defaultStruct };
  struct.rangeMin = rangeMinValidation;
  struct.rangeMax = rangeMaxValidation;
  struct.unitOfMeasurement = t.String;
  struct.precision = precisionAndAccuracyValidation;
  struct.accuracy = precisionAndAccuracyValidation;
  const dataTypeStringNumberStruct = t.struct(struct);
  return dataTypeStringNumberStruct;
};
