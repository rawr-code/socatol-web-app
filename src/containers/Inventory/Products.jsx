import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import styles from './styles';

// MaterialUI
import {
	Button,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	IconButton,
	withStyles,
	Menu,
	MenuItem,
	Typography,
	Dialog
} from '@material-ui/core';

// Icons
import { ChevronDown } from 'react-feather';

// Actions
import { GET_ALL as GET_ALL_WAREHOUSE } from '../../actions/Warehouse';
import { GET_ALL, NEW, DELETE, UPDATE } from '../../actions/Product';

// Components
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
						Agregar Producto
					</Button>
				</header>
				<Paper>
					{products && products.length > 0 ? (
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Nombre</TableCell>
									<TableCell>Stock</TableCell>
									{/* <TableCell>Proveedores</TableCell> */}
									<TableCell>IVA</TableCell>
									<TableCell align="right" style={{ paddingRight: 0 }}>
										Precio
									</TableCell>
									<TableCell />
								</TableRow>
							</TableHead>

							<TableBody>
								{products.map(product => (
									<TableRow key={product._id}>
										<TableCell component="th" scope="row">
											{product.name}
										</TableCell>
										<TableCell>{product.stock}</TableCell>
										{/* <TableCell>{product.suppliders}</TableCell> */}
										<TableCell>{product.iva}%</TableCell>
										<TableCell align="right" style={{ paddingRight: 0 }}>
											{product.price} Bs S
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
														this.crear(product) &
														this.handleClickOpenModal()
													}
												>
													Editar
												</MenuItem>
												<MenuItem
													onClick={() =>
														this.handleClose() & this.handleDelete(product._id)
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
								No se encontraron productos.
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
