import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

// Material UI
import { Dialog } from '@material-ui/core';

// Actions
import { GET_ALL as GET_ALL_WAREHOUSE } from '../../store/actions/Warehouse';
import { GET_ALL, NEW, DELETE, UPDATE } from '../../store/actions/Product';

// Components
import CardContainer from '../../components/CardContainer';
import DataTableHeader from '../../components/DataTableHeader';
import DataTable from '../../components/DataTable';
import NewProduct from './forms/NewProduct';

class Products extends PureComponent {
  state = {
    modalOpen: false,
    modalForm: null
  };

  componentDidMount = () => {
    const { getAll } = this.props.actions;

    getAll();
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
      }
    ];
    const { products } = this.props.data.product;
    return (
      <CardContainer>
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
          // rows={[]}
          openModal={e => console.log('soy la funcion')}
          handleEdit={e => console.log(e)}
          handleRemove={e => console.log(e)}
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
      </CardContainer>
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
