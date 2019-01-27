import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import Auth from './Auth';

// Inventory
import Warehouse from './Warehouse';
import Product from './Product';

export default combineReducers({
  Auth,
  form: FormReducer,
  Warehouse,
  Product
});
