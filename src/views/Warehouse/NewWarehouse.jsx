import React from 'react';

// Mutations
import { NEW_WAREHOUSE_MUTATION } from '../../mutations/Warehouse';

import WarehouseForm from './WarehouseForm';

const NewWarehouse = () => {
  return <WarehouseForm mutation={NEW_WAREHOUSE_MUTATION} />;
};

export default NewWarehouse;
