import { combineReducers } from 'redux';

import Warehouse from './WarehouseReducer';

const InventoryManagement = combineReducers({ Warehouse });

export default InventoryManagement;
