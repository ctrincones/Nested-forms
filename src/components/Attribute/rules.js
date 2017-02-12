import t from 'tcomb-form';
import _ from 'lodash';

const defaultStruct = {
  name: t.String,
  description: t.String,
  deviceResourceType: t.Str,
  defaultValue: t.String,
  dataType: t.Str,
  format: t.Str,
};

const changeNameStruct = (attributesList, struct) => {
  const newStruct = struct;
  const nameValidation = t.refinement(t.String, (value) => {
    const attributeObject = {
      list: attributesList,
    };
    const attributeIndex = _.findIndex(attributesList, { name: value });
    console.log(attributeIndex > -1, attributeObject.list, value);
    return !(attributeIndex > -1);
  });
  newStruct.name = nameValidation;
  return newStruct;
};

export const getBaseStruct = (attributesList) => {
  let struct = { ...defaultStruct };
  if (attributesList) {
    struct = changeNameStruct(attributesList, struct);
  }
  const baseStruct = t.struct(struct);
  return baseStruct;
};

export const getDataTypeStringNoneStruct = (attributesList) => {
  let struct = { ...defaultStruct };
  if (attributesList) {
    struct = changeNameStruct(attributesList, struct);
  }
  struct.enumerationsData = t.maybe(t.String);
  const dataTypeStringNoneStruct = t.struct(struct);
  return dataTypeStringNoneStruct;
};

export const getDataTypeStringNumberStruct = (rangeMin, rangeMax, attributesList) => {
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
  let struct = { ...defaultStruct };
  if (attributesList) {
    struct = changeNameStruct(attributesList, struct);
  }
  struct.rangeMin = rangeMinValidation;
  struct.rangeMax = rangeMaxValidation;
  struct.unitOfMeasurement = t.String;
  struct.precision = precisionAndAccuracyValidation;
  struct.accuracy = precisionAndAccuracyValidation;
  const dataTypeStringNumberStruct = t.struct(struct);
  return dataTypeStringNumberStruct;
};
