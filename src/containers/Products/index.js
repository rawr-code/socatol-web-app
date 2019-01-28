import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

// Components
import Product from './Product';

// Actions
import { GET_ALL as GET_ALL_WAREHOUSE } from '../../actions/Warehouse';
import { GET_ALL, GET, NEW } from '../../actions/Product';

class ProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemSelected: null,
      modalOpen: false,
      modalType: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickOpenModal = this.handleClickOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  componentWillMount() {
    this.props.actions.getAll();
  }

  handleClick(id) {
    this.props.actions.get(id);
  }

  handleClickOpenModal = () => {
    this.setState({ modalOpen: true });
    this.props.actions.getAllWarehouse();
    this.props.actions.resetForm('newProduct');
  };

  handleCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  handleAdd(payload) {
    this.props.actions.new(payload);
    this.props.actions.getAll();
    // this.setState({ modalOpen: false });
    // this.props.actions.resetForm('newProduct');
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Product
        state={state}
        handleClick={this.handleClick}
        modalOpen={this.state.modalOpen}
        handleClickOpenModal={this.handleClickOpenModal}
        handleCloseModal={this.handleCloseModal}
        handleAdd={this.handleAdd}
      />
    );
  }
}

const mapStateToProps = ({
  Product: { product, products },
  Warehouse: { warehouses }
}) => ({
  state: {
    product,
    products,
    warehouses
  }
});

const mapDispatchToProps = dispatch => ({
  actions: {
    resetForm: name => dispatch(reset(name)),
    getAllWarehouse: () => dispatch(GET_ALL_WAREHOUSE),
    getAll: () => dispatch(GET_ALL),
    get: id => dispatch(GET(id)),
    new: payload => dispatch(NEW(payload))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
