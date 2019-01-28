import React from 'react';
import styles from './styles';

// Material UI
import { withStyles } from '@material-ui/core';

// Components
import ListItems from '../../components/ListItems';
import ItemDetails from '../../components/ItemDetails';

// Forms
import NewProduct from './ModalForms/NewProduct';

const Product = props => {
  const {
    classes,
    handleClick,
    handleClickOpenModal,
    modalOpen,
    handleCloseModal
  } = props;
  const { products, product } = props.state;
  return (
    <div className={classes.root}>
      <ListItems
        data={products}
        onClick={handleClick}
        newItem={handleClickOpenModal}
      />
      <ItemDetails item={product} />
      <NewProduct
        title="Nuevo Producto"
        open={modalOpen}
        handleClose={handleCloseModal}
      />
    </div>
  );
};

export default withStyles(styles)(Product);
