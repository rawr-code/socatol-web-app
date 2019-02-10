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
	withStyles
} from '@material-ui/core';

// Icons
import { ChevronDown } from 'react-feather';

// Actions
import { GET_ALL, NEW } from '../../actions/Product';

class Products extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			selectedItem: null,
			selectedTab: 0
		};
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

	render() {
		// const { classes, theme, data } = this.props;

		return (
			<Fragment>
				<header
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						marginBottom: 16
					}}
				>
					<Button variant="contained" color="primary">
						Agregar Producto
					</Button>
				</header>
				<Paper>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Nombre</TableCell>
								<TableCell>Stock</TableCell>
								<TableCell>Proveedores</TableCell>
								<TableCell>IVA</TableCell>
								<TableCell align="right" style={{ paddingRight: 0 }}>
									Precio
								</TableCell>
								<TableCell />
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell component="th" scope="row">
									Veneno tipo 1
								</TableCell>
								<TableCell>40</TableCell>
								<TableCell>3</TableCell>
								<TableCell>12%</TableCell>
								<TableCell align="right" style={{ paddingRight: 0 }}>
									885,00 Bs S
								</TableCell>
								<TableCell style={{ width: 1, padding: '0 16px' }}>
									<IconButton>
										<ChevronDown size={15} />
									</IconButton>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Paper>
			</Fragment>
		);
	}
}

Products = withStyles(styles, { withTheme: true })(Products);
const mapStateToProps = ({ Inventory: { Product } }) => ({
	data: {
		...Product
	}
});

const mapDispatchToProps = dispatch => ({
	actions: {
		resetForm: name => dispatch(reset(name)),
		getAll: () => dispatch(GET_ALL),
		new: payload => dispatch(NEW(payload))
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Products);
