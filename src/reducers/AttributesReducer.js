import _ from 'lodash';
import {
  CREATE_NEW_ATTRIBUTE,
  ATTRIBUTE_CHANGED,
  DATATYPE_CHANGED,
  CHANGE_ENUMERATIONS_DEFAULT,
  ADD_ENUMERATION_DATA,
} from './../actions/types';

const INITIAL_STATE = {
  attributesList: [],
};

let attributeIndex;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_NEW_ATTRIBUTE:
      return { ...state, attributesList: [...state.attributesList, action.payload] };
    case ATTRIBUTE_CHANGED:
      attributeIndex = _.findIndex(state.attributesList, { id: action.payload.id });
      return {
        ...state,
        attributesList: [
          ...state.attributesList.slice(0, attributeIndex),
          {
            ...state.attributesList[attributeIndex],
            [action.payload.field]: action.payload.value,
          },
          ...state.attributesList.slice(attributeIndex + 1)],
      };
    case DATATYPE_CHANGED:
      attributeIndex = _.findIndex(state.attributesList, { id: action.payload.id });
      return {
        ...state,
        attributesList: [
          ...state.attributesList.slice(0, attributeIndex),
          {
            ...state.attributesList[attributeIndex],
            format: 'none',
          },
          ...state.attributesList.slice(attributeIndex + 1)],
      };
    case CHANGE_ENUMERATIONS_DEFAULT:
      attributeIndex = _.findIndex(state.attributesList, { id: action.payload.id });
      return {
        ...state,
        attributesList: [
          ...state.attributesList.slice(0, attributeIndex),
          {
            ...state.attributesList[attributeIndex],
            enumerations: action.payload.value,
          },
          ...state.attributesList.slice(attributeIndex + 1)],
      };
    case ADD_ENUMERATION_DATA:
      attributeIndex = _.findIndex(state.attributesList, { id: action.payload.id });
      return {
        ...state,
        attributesList: [
          ...state.attributesList.slice(0, attributeIndex),
          {
            ...state.attributesList[attributeIndex],
            enumerations: state.attributesList[attributeIndex].enumerations
            .concat([action.payload.value]),
          },
          ...state.attributesList.slice(attributeIndex + 1)],
      };
    default:
      return state;
  }
};
