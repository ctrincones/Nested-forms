import t from 'tcomb-form';


const enumDataRule = t.refinement(t.String, () => {
  return true;
});

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
  struct.enumerationsData = enumDataRule;
  const dataTypeStringNoneStruct = t.struct(struct);
  return dataTypeStringNoneStruct;
};

export const getDataTypeStringNumberStruct = () => {
  const struct = { ...defaultStruct };
  struct.rangeMin = t.Number;
  struct.rangeMax = t.Number;
  struct.unitOfMeasurement = t.String;
  struct.precision = t.Number;
  struct.accuracy = t.Number;
  const dataTypeStringNumberStruct = t.struct(struct);
  return dataTypeStringNumberStruct;
};
