import { combineReducers } from 'redux';

import Auth from './Auth';
import InventoryManagement from './InventoryManagement';

const reducers = combineReducers({ Auth, InventoryManagement });

export default reducers;
