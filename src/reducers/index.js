import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import Auth from './Auth';

import Layout from './Layout';

// Inventory
import Warehouse from './Warehouse';
import Product from './Product';

const Inventory = combineReducers({ Warehouse, Product });

export default combineReducers({
	Auth,
	form: FormReducer,
	Inventory,
	Layout
});
