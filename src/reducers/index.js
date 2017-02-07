import { combineReducers } from 'redux';
import AttributesReducer from './AttributesReducer';

export default combineReducers({
  attributes: AttributesReducer,
});
