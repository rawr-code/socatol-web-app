import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

// Material UI
import { Dialog } from '@material-ui/core';

// Actions
import { GET_ALL as GET_ALL_WAREHOUSE } from '../../actions/Warehouse';
import { GET_ALL, NEW, DELETE, UPDATE } from '../../actions/Product';

// Components
import DataTableHeader from '../../components/DataTableHeader';
import DataTable from '../../components/DataTable';
import NewProduct from './forms/NewProduct';

class Products extends PureComponent {
  state = {
    modalOpen: false,
    modalForm: null
  };

  componentDidMount = async () => {
    const { getAll } = this.props.actions;

    await getAll();
  };

  handleClickOpen = async () => {
    await this.props.actions.getAllWarehouse();
    const { warehouses } = this.props.data.warehouse;
    this.setState({ modalOpen: true });
    const component = (
      <NewProduct
        warehouses={warehouses}
        // initialValues={{ name: 'emma' }}
        onSubmit={values => console.log(values)}
        title="Nuevo producto"
        open={this.state.modalOpen}
        handleClose={this.handleClose.bind(this)}
      />
    );
    this.setState({ modalForm: component });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { data } = this.props;
    const { products } = data.product;
    const columns = [
      {
        name: 'name',
        title: 'Nombre'
      },
      {
        name: 'stock',
        title: 'Stock'
      },
      {
        name: 'iva',
        title: 'IVA'
      },
      {
        name: 'price',
        title: 'Precio'
      },
      {
        name: 'warehouse',
        title: 'Almacen'
      }
    ];
    return (
      <Fragment>
        <DataTableHeader
          img="https://img.icons8.com/dusk/64/000000/product.png"
          title="Productos"
          onClick={this.handleClickOpen}
          subtitle="Listado de productos"
          button
          buttonLabel="Añadir Producto"
        />
        <DataTable
          columns={columns}
          rows={products ? products : []}
          openModal={e => console.log('soy la funcion')}
        />
        <Dialog
          open={this.state.modalOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth="xs">
          <DataTableHeader
            img="https://img.icons8.com/dusk/64/000000/product.png"
            title="Producto"
            subtitle="Formulario de registro"
          />
          {this.state.modalForm}
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = ({
  Inventory: { Product: product, Warehouse: warehouse }
}) => ({
  data: {
    product,
    warehouse
  }
});

const mapDispatchToProps = dispatch => ({
  actions: {
    resetForm: name => dispatch(reset(name)),
    getAllWarehouse: () => dispatch(GET_ALL_WAREHOUSE),
    getAll: () => dispatch(GET_ALL),
    new: payload => dispatch(NEW(payload)),
    update: (id, payload) => dispatch(UPDATE(id, payload)),
    deleteItem: id => dispatch(DELETE(id))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
