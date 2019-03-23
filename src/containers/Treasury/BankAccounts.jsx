import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

// Actions
import { GET_ALL, NEW, DELETE, UPDATE } from '../../store/actions/BankAccount';

// Material UI
import { Dialog } from '@material-ui/core';

// Icons
import NewBankAccount from './NewBankAccount';

// Components
import CardContainer from '../../components/CardContainer';
import DataTableHeader from '../../components/DataTableHeader';
import DataTable from '../../components/DataTable';

class BankAccounts extends PureComponent {
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
  }
  componentDidMount = async () => {
    const { getAll } = this.props.actions;

    await getAll();
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
  handleDelete = async id => {
    const { deleteItem, getAll } = this.props.actions;
    await deleteItem(id);
    await getAll();
  };
  handleClickOpenModal = () => {
    this.setState({ modalOpen: true });
    this.props.actions.resetForm('newBankAccount');
  };
  handleCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  crear = data => {
    const cmp = data ? (
      <NewBankAccount
        info={data}
        title="EDITAR PRODUCTO"
        handleClose={this.handleCloseModal}
        onSubmit={values => this.handleUpdate(data._id, values)}
      />
    ) : (
      <NewBankAccount
        title="NUEVA PRODUCTO"
        handleClose={this.handleCloseModal}
        onSubmit={values => this.handleAdd(values)}
      />
    );
    this.setState({ item: cmp });
  };
  render() {
    const { data } = this.props;
    const { bankAccounts } = data.bankAccount;
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
        name: 'number',
        title: 'Número de cuenta'
      },
      {
        name: 'type',
        title: 'Tipo'
      }
    ];
    return (
      <CardContainer>
        <DataTableHeader
          img="https://img.icons8.com/dusk/64/000000/merchant-account.png"
          title="Cuentas Bancarias"
          subtitle="Listado de cuentas bancarias"
          buttonLabel="Añadir Cuenta"
          button
        />
        <DataTable columns={columns} rows={bankAccounts ? bankAccounts : []} />
        <Dialog
          open={this.state.modalOpen}
          aria-labelledby="form-dialog-title"
          maxWidth="xs">
          <div>{this.state.item}</div>
        </Dialog>
      </CardContainer>
    );
  }
}

const mapStateToProps = ({ Treasury: { BankAccount: bankAccount } }) => ({
  data: {
    bankAccount
  }
});

const mapDispatchToProps = dispatch => ({
  actions: {
    resetForm: name => dispatch(reset(name)),
    getAll: () => dispatch(GET_ALL),
    new: payload => dispatch(NEW(payload)),
    update: (id, payload) => dispatch(UPDATE(id, payload)),
    deleteItem: id => dispatch(DELETE(id))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BankAccounts);
