import React from 'react';
import styles from './styles';

// Material UI
import { withStyles, Paper } from '@material-ui/core';

// Components
import ListItems from '../../components/ListItems';
import ItemDetails from '../../components/ItemDetails';
import TableBoard from '../../components/TableBoard';

// Forms
import NewProduct from './ModalForms/NewProduct';

const Product = props => {
  const {
    classes,
    handleClick,
    handleClickOpenModal,
    modalOpen,
    handleCloseModal,
    handleAdd
  } = props;
  const { products, product, warehouses } = props.state;
  return (
    <div>
      <TableBoard />
    </div>
    // <Paper className={classes.root}>
    //   <ListItems
    //     data={products}
    //     onClick={handleClick}
    //     newItem={handleClickOpenModal}
    //   />
    //   <ItemDetails item={product} />
    //   <NewProduct
    //     title="Nuevo Producto"
    //     open={modalOpen}
    //     handleClose={handleCloseModal}
    //     inputSelectOptions={warehouses}
    //     onSubmit={handleAdd}
    //   />
    // </Paper>
  );
};

export default withStyles(styles)(Product);
