import React from 'react';
import styles from './styles';

// Material UI
import { withStyles } from '@material-ui/core';

// Components
import ProductList from '../../components/ProductList';

const Product = props => {
  return (
    <div>
      <ProductList data={props.state.products} />
    </div>
  );
};

export default withStyles(styles)(Product);
