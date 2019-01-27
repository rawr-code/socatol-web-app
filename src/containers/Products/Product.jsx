import React from 'react';

// Components
import ListItems from '../../components/ListItems';
import ItemDetails from '../../components/ItemDetails';

const Product = props => {
  const { products } = props.state;
  return (
    <div style={{ display: 'flex' }}>
      <ListItems data={products} />
      <ItemDetails />
    </div>
  );
};

export default Product;
