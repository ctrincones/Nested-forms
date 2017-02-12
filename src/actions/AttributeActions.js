import shortid from 'shortid';
import {
  CREATE_NEW_ATTRIBUTE,
  ATTRIBUTE_CHANGED,
  DATATYPE_CHANGED,
  CHANGE_ENUMERATIONS_DEFAULT,
  ADD_ENUMERATION_DATA,
  CHANGE_DATATYPE_STRING_NUMBER_DEFAULT,
  DELETE_ATTRIBUTE,
  FORM_VALIDATION_ERROR,
  CLEAR_VALIDATION_ERRORS,
  DELETE_ENUMERATION_DATA,
  VALIDATE_ALL_ATTRIBUTES,
  CLEAR_ALL_ATTRIBUTES_VALIDATION,
  CLEAR_DELETE_ATTRIBUTE_NOTIFICATION,
} from './types';

export const createNewAttribute = (category) => {
  const attributeModel = {
    id: shortid.generate(),
    category,
    name: '',
    description: '',
    deviceResourceType: 'DEFAULT VALUE',
    defaultValue: '',
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
  return {
    type: CHANGE_ENUMERATIONS_DEFAULT,
    payload: {
      id,
      value,
    },
  };
};

export const changeDatatypeStringNumberDefault = (id, value) => {
  return {
    type: CHANGE_DATATYPE_STRING_NUMBER_DEFAULT,
    payload: {
      id,
      value,
    },
  };
};

export const deleteAttribute = (id) => {
  return {
    type: DELETE_ATTRIBUTE,
    payload: {
      id,
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

export const deleteEnumerationValue = (id, value) => {
  console.log(id);
  console.log(value);
  return {
    type: DELETE_ENUMERATION_DATA,
    payload: {
      id,
      value,
    },
  };
};

export const dispatchFormError = (id) => {
  return {
    type: FORM_VALIDATION_ERROR,
    payload: {
      id,
    },
  };
};

export const clearValidationErrors = (id) => {
  return {
    type: CLEAR_VALIDATION_ERRORS,
    payload: {
      id,
    },
  };
};

export const validateAllAttributes = () => {
  return {
    type: VALIDATE_ALL_ATTRIBUTES,
  };
};

export const clearAllAttributesValidation = () => {
  return {
    type: CLEAR_ALL_ATTRIBUTES_VALIDATION,
  };
};

export const clearDeleteAttributeSuccess = () => {
  return {
    type: CLEAR_DELETE_ATTRIBUTE_NOTIFICATION,
  };
};
