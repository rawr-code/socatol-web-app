import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

// Actions
import { GET_ALL, NEW, DELETE, UPDATE } from '../../actions/BankAccount';

// Material UI
import {
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Button,
	IconButton,
	Menu,
	Typography,
	Dialog,
	MenuItem
} from '@material-ui/core';

// Icons
import { ChevronDown } from 'react-feather';
import NewBankAccount from './NewBankAccount';
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
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);
		return (
			<Fragment>
				<header
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						marginBottom: 16
					}}
				>
					<Button
						variant="contained"
						color="primary"
						onClick={() => this.crear() & this.handleClickOpenModal()}
					>
						Agregar cuenta
					</Button>
				</header>
				<Paper>
					{bankAccounts && bankAccounts.length > 0 ? (
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Nombre</TableCell>
									<TableCell>Banco</TableCell>
									<TableCell>Número de cuenta</TableCell>
									<TableCell>Tipo</TableCell>
									<TableCell align="right" style={{ paddingRight: 0 }}>
										Balance
									</TableCell>
									<TableCell />
								</TableRow>
							</TableHead>
							<TableBody>
								{bankAccounts.map(item => (
									<TableRow key={item._id}>
										<TableCell component="th" scope="row">
											{item.name}
										</TableCell>
										<TableCell>{item.bank}</TableCell>
										<TableCell>{item.number}</TableCell>
										<TableCell>{item.type}</TableCell>
										<TableCell align="right" style={{ paddingRight: 0 }}>
											12.785,00 Bs S
										</TableCell>
										<TableCell style={{ width: 1, padding: '0 16px' }}>
											<IconButton
												aria-label="More"
												aria-owns={open ? 'long-menu' : undefined}
												aria-haspopup="true"
												onClick={this.handleClick}
											>
												<ChevronDown size={15} />
											</IconButton>
											<Menu
												id="long-menu"
												anchorEl={anchorEl}
												open={open}
												onClose={this.handleClose}
												PaperProps={{
													style: {
														minWidth: 100,
														marginTop: 50
													}
												}}
											>
												<MenuItem
													onClick={() =>
														this.handleClose() &
														this.crear(item) &
														this.handleClickOpenModal()
													}
												>
													Editar
												</MenuItem>
												<MenuItem
													onClick={() =>
														this.handleClose() & this.handleDelete(item._id)
													}
												>
													Eliminar
												</MenuItem>
											</Menu>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					) : (
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: 500
							}}
						>
							<Typography variant="h6" component="span">
								No se encontraron cuentas bancarias.
							</Typography>
						</div>
					)}
				</Paper>
				<Dialog
					open={this.state.modalOpen}
					aria-labelledby="form-dialog-title"
					maxWidth="xs"
				>
					<div>{this.state.item}</div>
				</Dialog>
			</Fragment>
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
