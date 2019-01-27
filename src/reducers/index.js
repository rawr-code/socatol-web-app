import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import Auth from './Auth';
import Inventory from './Inventory';

export default combineReducers({
  Auth,
  Inventory,
  form: FormReducer
});
