import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Product from './Product';

// Actions
import { GET_ALL, GET } from '../../actions/Product';

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
  }
  componentWillMount() {
    this.props.actions.getAll();
  }

  handleClick(id) {
    this.props.actions.get(id);
  }

  handleClickOpenModal = () => {
    this.setState({ modalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { state } = this.props;
    return (
      <Product
        state={state}
        handleClick={this.handleClick}
        modalOpen={this.state.modalOpen}
        handleClickOpenModal={this.handleClickOpenModal}
        handleCloseModal={this.handleCloseModal}
      />
    );
  }
}

const mapStateToProps = ({ Product }) => ({
  state: { ...Product }
});

const mapDispatchToProps = dispatch => ({
  actions: {
    getAll: () => dispatch(GET_ALL),
    get: id => dispatch(GET(id))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
