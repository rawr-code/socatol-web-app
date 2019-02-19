import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import styles from './styles';

// MaterialUI
import { withStyles, Dialog } from '@material-ui/core';

// Actions
import { GET_ALL as GET_ALL_WAREHOUSE } from '../../actions/Warehouse';
import { GET_ALL, NEW, DELETE, UPDATE } from '../../actions/Product';

// Components
import DataTableHeader from '../../components/DataTableHeader';
import DataTable from '../../components/DataTable';
import NewProduct from './forms/NewProduct';

class Products extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null,
      selectedTab: 0,
      modalOpen: false,
      modalType: null,
      anchorEl: null,
      item: null
    };

    this.handleClickOpenModal = this.handleClickOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount = async () => {
    const { getAll } = this.props.actions;

    await getAll();
  };

  handleSelectItem = listItem => {
    this.setState({ selectedItem: listItem });
    this.setState({ selectedTab: 0 });
  };

  handleChangeTab = (e, selectedTab) => {
    this.setState({ selectedTab });
  };

  handleClickOpenModal = () => {
    this.setState({ modalOpen: true });
    this.props.actions.getAllWarehouse();
    this.props.actions.resetForm('newProduct');
  };

  handleCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  handleAdd = async payload => {
    await this.props.actions.new(payload);
    await this.props.actions.getAll();
    this.setState({ modalOpen: false });
    this.props.actions.resetForm('newProduct');
  };
  handleUpdate = async (id, payload) => {
    await this.props.actions.update(id, payload);
    await this.props.actions.getAll();
    this.setState({ modalOpen: false });
    this.props.actions.resetForm('newProduct');
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleDelete = async id => {
    const { deleteItem, getAll } = this.props.actions;
    await deleteItem(id);
    await getAll();
  };

  handleChangeData = data => {
    this.setState({ selectedItem: data });
  };
  crear = data => {
    const cmp = data ? (
      <NewProduct
        info={data}
        title="EDITAR PRODUCTO"
        handleClose={this.handleCloseModal}
        onSubmit={values => this.handleUpdate(data._id, values)}
      />
    ) : (
      <NewProduct
        title="NUEVA PRODUCTO"
        handleClose={this.handleCloseModal}
        onSubmit={values => this.handleAdd(values)}
      />
    );
    this.setState({ item: cmp });
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
      }
    ];
    return (
      <Fragment>
        <DataTableHeader
          img="https://img.icons8.com/dusk/64/000000/move-by-trolley.png"
          onClick={() =>
            this.handleClose() & this.crear() & this.handleClickOpenModal()
          }
          title="Productos"
          subtitle="Listado de productos"
          buttonLabel="Añadir Producto"
        />
        <DataTable columns={columns} rows={products ? products : []} />
        <Dialog
          open={this.state.modalOpen}
          aria-labelledby="form-dialog-title"
          maxWidth="xs">
          <div>{this.state.item}</div>
        </Dialog>
      </Fragment>
    );
  }
}

Products = withStyles(styles, { withTheme: true })(Products);

const mapStateToProps = ({ Inventory: { Product: product } }) => ({
  data: {
    product
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
