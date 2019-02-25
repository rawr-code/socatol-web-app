import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

// Material UI
import { Dialog, Button, Paper } from '@material-ui/core';
// Material UI
import { TableRow, IconButton } from '@material-ui/core';

// Icons
import { ChevronDown } from 'react-feather';
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
    modalForm: null,
    rows: [],
    columns: [
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
    ]
  };

  componentDidMount = async () => {
    const { getAll } = this.props.actions;

    await getAll();
    this.setState({ rows: this.props.data.product.products });
    this.addOptions(this.state.rows);
  };

  addOptions = rows => {
    let newRows = [];
    rows.map(row => {
      newRows.push({
        ...row,
        options: (
          <IconButton>
            <ChevronDown size={16} />
          </IconButton>
        )
      });
    });
    this.setState({ rows: newRows });
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
    const { columns, rows } = this.state;
    return (
      <Fragment>
        <Paper>
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
            rows={rows}
            openModal={e => console.log('soy la funcion')}
            handleEdit={e => console.log(e)}
            handleRemove={e => console.log(e)}
          />
        </Paper>
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
