import React from 'react';

// Mutations
import { NEW_PRODUCT_MUTATION } from '../../mutations/Product';

import ProductForm from './ProductForm';

const NewProduct = () => {
  return <ProductForm mutation={NEW_PRODUCT_MUTATION} />;
};

export default NewProduct;
