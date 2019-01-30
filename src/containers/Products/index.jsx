import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

// Components
import ProductList from '../../components/ProductList';

// Actions
import { GET_ALL as GET_ALL_WAREHOUSE } from '../../actions/Warehouse';
import { GET_ALL, NEW } from '../../actions/Product';

class ProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      modalType: null
    };

    this.handleClickOpenModal = this.handleClickOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  async componentDidMount() {
    await this.props.actions.getAll();
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
    const {
      state: { products },
      isLoading
    } = this.props;

    return <ProductList data={products} isLoading={isLoading} />;
  }
}

const mapStateToProps = ({
  Product: { product, products, loading },
  Warehouse: { warehouses }
}) => ({
  isLoading: loading,
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
    new: payload => dispatch(NEW(payload))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
