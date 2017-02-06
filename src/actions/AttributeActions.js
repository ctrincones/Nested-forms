import { CREATE_NEW_ATTRIBUTE, ATTRIBUTE_CHANGED } from './types';
import shortid from 'shortid';

export const createNewAttribute = (category) => {
  const attributeModel = {
    id: shortid.generate(),
    category,
    name: '',
    description: '',
    devicert: 'Default value',
    defaultvalue: '',
    datatype: {
      type: 'STRING',
      format: {
        type: 'NONE',
        enumerations: ["test"]
      }
    }
  };
  return {
    type: CREATE_NEW_ATTRIBUTE,
    payload: attributeModel
  };
}

export const changeAttribute = (attributeData) => {
  return {
    type: ATTRIBUTE_CHANGED,
    payload: attributeData
  };
}
