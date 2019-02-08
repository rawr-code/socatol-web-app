import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import styles from './styles';

// MaterialUI
import {
	Tab,
	Tabs,
	Fab,
	Zoom,
	Typography,
	withStyles
} from '@material-ui/core';

import { Add, Edit, PersonAdd } from '@material-ui/icons';

// Actions
import { GET_ALL, NEW } from '../../actions/Product';

// Icons
import { Package } from 'react-feather';

// Components
import TableBoard from '../../components/TableBoard';

const fabs = [
	{
		name: 'edit',
		icon: <Edit />
	},
	{
		name: 'add',
		icon: <Add />
	},
	{
		name: 'personAdd',
		icon: <PersonAdd />
	}
];

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
		const { classes, theme, data } = this.props;
		const { selectedItem, selectedTab } = this.state;
		const transitionDuration = {
			enter: theme.transitions.duration.enteringScreen,
			exit: theme.transitions.duration.leavingScreen
		};
		const dataConfig = { primary: 'name', secondary: 'description' };
		const tableBoardLabels = {
			listHeader: {
				inputSearchPlaceholder: 'Buscar Producto'
			},
			listEmpty: {
				title: 'No se encontraron productos',
				subtitle: 'Añada un producto para comenzar.'
			},
			listButtons: {
				button: 'Añadir Producto'
			},
			asideInfo: {
				title: 'No has seleccionado ningún producto',
				subtitle:
					'Seleccione uno de los productos existentes o añade uno nuevo.'
			}
		};

		return (
			<div style={{ padding: 8 }}>
				<TableBoard
					icon={Package}
					labels={tableBoardLabels}
					listItemConfig={dataConfig}
					data={data.products}
					selectedItem={selectedItem}
					listItemClick={this.handleSelectItem}
				>
					{selectedItem && (
						<div className={classes.sectionContainer}>
							<header className={classes.header}>
								<Typography variant="h5">{selectedItem.name}</Typography>
							</header>
							<Tabs
								className={classes.tabs}
								value={selectedTab}
								onChange={this.handleChangeTab}
								indicatorColor="primary"
								textColor="primary"
							>
								<Tab label="Información" disableRipple />
								<Tab label="Presentaciones" disableRipple />
								<Tab label="Proveedores" disableRipple />
							</Tabs>
							<div className={classes.container}>
								{selectedTab === 0 && <div>{selectedItem.description}</div>}
								{selectedTab === 1 && <div>Presentaciones</div>}
								{selectedTab === 2 && <div>Proveedores</div>}
							</div>
							{fabs.map((fab, index) => (
								<Zoom
									key={fab.name}
									in={selectedTab === index}
									timeout={transitionDuration}
									style={{
										transitionDelay: `${
											selectedTab === index ? transitionDuration.exit : 0
										}ms`
									}}
									unmountOnExit
								>
									<Fab color="primary" className={classes.fab}>
										{fab.icon}
									</Fab>
								</Zoom>
							))}
						</div>
					)}
				</TableBoard>
			</div>
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
