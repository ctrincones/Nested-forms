import _ from 'lodash';
import { CREATE_NEW_ATTRIBUTE, ATTRIBUTE_CHANGED } from './../actions/types';

const INITIAL_STATE = {
  attributesList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_NEW_ATTRIBUTE:
      return { ...state, attributesList: [...state.attributesList, action.payload] };
    case ATTRIBUTE_CHANGED:
      const attributeIndex = _.findIndex(state.attributesList, { id: action.payload.id });
      switch (action.payload.field) {
        case 'dataType':
          return {
            ...state,
            attributesList: [
              ...state.attributesList.slice(0, attributeIndex),
              {
                ...state.attributesList[attributeIndex],
                dataType: action.payload.value,
              },
              ...state.attributesList.slice(attributeIndex + 1)],
          };
        default:
          return state;
      }
    default:
      return state;
  }
};
