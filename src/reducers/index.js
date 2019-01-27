import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import Auth from './Auth';

export default combineReducers({
  Auth,
  form: FormReducer
});
