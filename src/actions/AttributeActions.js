import shortid from 'shortid';
import {
  CREATE_NEW_ATTRIBUTE,
  ATTRIBUTE_CHANGED,
  DATATYPE_CHANGED,
  CHANGE_ENUMERATIONS_DEFAULT,
} from './types';

export const createNewAttribute = (category) => {
  const attributeModel = {
    id: shortid.generate(),
    category,
    name: 'Test name',
    description: 'Test description',
    defaultValue: 'default',
    dataType: 'string',
    format: 'none',
    enumerations: [],
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
