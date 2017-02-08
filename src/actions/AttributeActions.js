import shortid from 'shortid';
import {
  CREATE_NEW_ATTRIBUTE,
  ATTRIBUTE_CHANGED,
  DATATYPE_CHANGED,
  CHANGE_ENUMERATIONS_DEFAULT,
  ADD_ENUMERATION_DATA,
} from './types';

export const createNewAttribute = (category) => {
  const attributeModel = {
    id: shortid.generate(),
    category,
    name: 'Test name',
    description: 'Test description',
    deviceResourceType: 'DEFAULT VALUE',
    defaultValue: 'default',
    dataType: 'string',
    format: 'none',
    enumerations: [],
    rangeMin: null,
    rangeMax: null,
    unitOfMeasurement: null,
    precision: null,
    accuracy: null,
  };
  return {
    type: CREATE_NEW_ATTRIBUTE,
    payload: attributeModel,
  };
};

export const changeAttribute = (attributeData) => {
  return (dispatch) => {
    dispatch({ type: ATTRIBUTE_CHANGED, payload: attributeData });
    if (attributeData.field === 'dataType') {
      dispatch({ type: DATATYPE_CHANGED, payload: attributeData });
    }
  };
};

export const changeEnumerationsDefault = (id, value) => {
  console.log(id);
  return {
    type: CHANGE_ENUMERATIONS_DEFAULT,
    payload: {
      id,
      value,
    },
  };
};

export const addEnumerationValue = (id, value) => {
  return {
    type: ADD_ENUMERATION_DATA,
    payload: {
      id,
      value,
    },
  };
};
