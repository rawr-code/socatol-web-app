import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import Auth from './Auth';

import Layout from './Layout';

// Inventory
import Warehouse from './Warehouse';
import Product from './Product';

// Treasury
import BankAccount from './BankAccount';

const Inventory = combineReducers({ Warehouse, Product });
const Treasury = combineReducers({ BankAccount });
export default combineReducers({
	Auth,
	form: FormReducer,
	Inventory,
	Layout,
	Treasury
});