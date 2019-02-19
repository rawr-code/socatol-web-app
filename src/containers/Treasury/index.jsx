import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import BankAccounts from './BankAccounts';
// import Conciliate from './Conciliate';

class TreasuryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      modalType: null
    };

    this.handleClickOpenModal = this.handleClickOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleClickOpenModal = () => {
    this.setState({ modalOpen: true });
    // this.props.actions.getAllWarehouse();
    // this.props.actions.resetForm('newProduct');
  };

  handleCloseModal = () => {
    this.setState({ modalOpen: false });
  };
  render() {
    return (
      <div>
        <BankAccounts openModal={this.handleClickOpenModal} />
        {/* <Conciliate /> */}
      </div>
    );
  }
}

const mapStateToProps = ({ Layout }) => ({
  state: {
    layout: Layout
  }
});

export default connect(mapStateToProps)(TreasuryContainer);
