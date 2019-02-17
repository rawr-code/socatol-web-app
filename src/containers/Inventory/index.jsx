import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

// Components
import Products from './Products';

class InventoryContainer extends PureComponent {
  render() {
    return <Products />;
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    resetForm: name => dispatch(reset(name))
  }
});

export default connect(
  null,
  mapDispatchToProps
)(InventoryContainer);
