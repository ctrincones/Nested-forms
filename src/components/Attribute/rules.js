import t from 'tcomb-form';


const enumDataRule = t.refinement(t.String, () => {
  return true;
});

let defaultStruct = {
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
  defaultStruct.enumerationsData = enumDataRule;
  const dataTypeStringNoneStruct = t.struct(defaultStruct);
  return dataTypeStringNoneStruct;
};

export const getDataTypeStringNumberStruct = () => {
  defaultStruct.rangeMin = t.Number;
  defaultStruct.rangeMax = t.Number;
  defaultStruct.unitOfMeasurement = t.String;
  defaultStruct.precision = t.Number;
  defaultStruct.accuracy = t.Number;
  const dataTypeStringNumberStruct = t.struct(defaultStruct);
  return dataTypeStringNumberStruct;
};
