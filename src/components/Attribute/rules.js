import t from 'tcomb-form';
import _ from 'lodash';
import { validator } from './customValidations';

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
  const nameValidatorFunct = (value, listOfAttributes) => {
    const attributeIndex = _.findIndex(listOfAttributes, { name: value });
    return !(attributeIndex > -1);
  };
  const nameValidation = validator(t.String, [nameValidatorFunct], attributesList);
  newStruct.name = nameValidation;
  return newStruct;
};

export const getBaseStruct = (attributesList, dataType) => {
  const dataTypeValue = dataType || null;
  let struct = { ...defaultStruct };
  if (attributesList) {
    struct = changeNameStruct(attributesList, struct);
  }
  if (dataTypeValue === 'object') {
    struct.defaultValue = t.maybe(t.String);
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
  const rangeMinValidationFunct = (val, maxRange) => {
    return val < maxRange;
  };
  const rangeMinValidation = validator(t.Number, [rangeMinValidationFunct], rangeMax);
  const rangeMaxValidationFunct = (val, minRange) => {
    return val > minRange;
  };
  const rangeMaxValidation = validator(t.Number, [rangeMaxValidationFunct], rangeMin);
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
