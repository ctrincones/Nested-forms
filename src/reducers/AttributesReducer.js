import  { CREATE_NEW_ATTRIBUTE, ATTRIBUTE_CHANGED } from './../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {
  attributeslist: []
};

export default (state = INITIAL_STATE, action ) => {
  switch(action.type){
    case CREATE_NEW_ATTRIBUTE:
    return {...state, attributeslist: [...state.attributeslist, action.payload ]};
    case ATTRIBUTE_CHANGED:
      const attributeIndex = _.findIndex(state.attributeslist, { id: action.payload.id});
      switch (action.payload.path) {
        case 'datat':
         return { ...state, attributeslist: [...state.attributeslist.slice(0, attributeIndex), {...state.attributeslist[attributeIndex], datat: action.payload.value  } , ...state.attributeslist.slice(attributeIndex + 1)]};
        default:
         return state;
     }
    default:
      return state;
  }
}
