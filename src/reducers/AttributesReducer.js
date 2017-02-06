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
      switch (action.payload.name) {
        case 'datatype':
         let formatDefaultValues;
         if(action.payload.value === 'STRING'){
            formatDefaultValues = {
              type: 'STRING',
              format: {
                type: 'NONE',
                enumerations: []
              }
            };
         } else if(action.payload.value === 'OBJECT') {
           formatDefaultValues = {
             type: 'OBJECT',
             format: {
               type: 'NONE'
             }
           };
         }
         return { ...state, attributeslist: [...state.attributeslist.slice(0, attributeIndex), {...state.attributeslist[attributeIndex], [action.payload.name]: formatDefaultValues }  , ...state.attributeslist.slice(attributeIndex + 1)]};
        case 'format':
          let formatDefaultFields;
          if(action.payload.value === 'NONE'){
              formatDefaultFields = {
                type: 'NONE',
                enumerations: []
              };
          } else if(action.payload.value === 'NUMBER'){
            formatDefaultFields = {
              type: 'NUMBER',
              rangemax:0,
              rangemin: 0,
              uom: 'test',
              precision: 0,
              accuracy : 0
            };
          } else if(action.payload.value === 'BOOLEAN'){
            formatDefaultFields = {
              type: 'BOOLEAN'

            };
          } else if(action.payload.value === 'DATE-TIME'){
            formatDefaultFields = {
              type: 'DATE-TIME'
            };
          } else if(action.payload.value === 'CDATA'){
            formatDefaultFields = {
              type: 'CDATA'
            };
          } else if(action.payload.value === 'URI'){
            formatDefaultFields = {
              type: 'URI'
            };
          }
          return { ...state, attributeslist: [...state.attributeslist.slice(0, attributeIndex), {...state.attributeslist[attributeIndex], datatype: { ...state.attributeslist[attributeIndex].datatype , format: formatDefaultFields } }  , ...state.attributeslist.slice(attributeIndex + 1)]};
          case 'name':
            return { ...state, attributeslist: [...state.attributeslist.slice(0, attributeIndex), {...state.attributeslist[attributeIndex], name: action.payload.value  }  , ...state.attributeslist.slice(attributeIndex + 1)]};
          case 'description':
            return { ...state, attributeslist: [...state.attributeslist.slice(0, attributeIndex), {...state.attributeslist[attributeIndex], description: action.payload.value  }  , ...state.attributeslist.slice(attributeIndex + 1)]};
          case 'defaultvalue':
            return { ...state, attributeslist: [...state.attributeslist.slice(0, attributeIndex), {...state.attributeslist[attributeIndex], defaultvalue: action.payload.value  }  , ...state.attributeslist.slice(attributeIndex + 1)]};
        default:
         return state;
     }
    default:
      return state;
  }
}
