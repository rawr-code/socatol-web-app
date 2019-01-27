import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Product from './Product';

// Actions
import { GET_ALL } from '../../actions/Product';

class ProductContainer extends Component {
  componentWillMount() {
    this.props.getAll();
  }

  render() {
    const { state } = this.props;
    return <Product state={state} />;
  }
}

const mapStateToProps = ({ Product }) => ({
  state: { ...Product }
});

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(GET_ALL)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
