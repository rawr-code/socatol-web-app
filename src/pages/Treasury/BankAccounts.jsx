import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { GET_ALL } from '../../store/actions/BankAccount';

// Organisms
import FullDataTable from '../../components/Organisms/FullDataTable';

class BankAccounts extends Component {
  componentDidMount = () => {
    const { getAllBankAccounts } = this.props.actions;
    getAllBankAccounts();
  };

  render() {
    const { bankAccounts } = this.props.state;
    const header = {
      img: 'https://img.icons8.com/dusk/64/000000/merchant-account.png',
      title: 'Cuentas Bancarias',
      subtitle: 'Listado de cuentas bancarias',
      buttonLabel: 'Agregar Cuenta',
      buttonURL: '/tesoreria/cuenta/nuevo',
      button: true
    };
    const columns = [
      {
        name: 'name',
        title: 'Nombre'
      },
      {
        name: 'bank',
        title: 'Banco'
      },
      {
        name: 'type',
        title: 'Tipo'
      },
      {
        name: 'number',
        title: 'Número de cuenta'
      }
    ];

    return (
      <FullDataTable header={header} table={{ rows: bankAccounts, columns }} />
    );
  }
}

const mapStateToProps = ({
  Treasury: {
    BankAccount: { bankAccounts }
  }
}) => ({
  state: { bankAccounts }
});

const mapDispatchToProps = dispatch => ({
  actions: {
    getAllBankAccounts: () => dispatch(GET_ALL)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BankAccounts);
