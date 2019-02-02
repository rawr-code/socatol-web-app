import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

// MaterialUI
import {
	Paper,
	Tab,
	Tabs,
	Fab,
	Zoom,
	Typography,
	withStyles
} from '@material-ui/core';

import { Add, Edit, PersonAdd } from '@material-ui/icons';
import { Package } from 'react-feather';

// Components
import TableBoard from '../TableBoard';

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

class ProductList extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			selectedTab: 0,
			selectedItem: null
		};

		this.handleSelectItem = this.handleSelectItem.bind(this);
	}

	handleChangeTab = (e, selectedTab) => {
		this.setState({ selectedTab });
	};

	handleSelectItem = selectedItem => {
		this.setState({ selectedItem, selectedTab: 0 });
	};

	render() {
		const { selectedTab, selectedItem } = this.state;
		const { classes, theme, isLoading, data } = this.props;
		const transitionDuration = {
			enter: theme.transitions.duration.enteringScreen,
			exit: theme.transitions.duration.leavingScreen
		};
		const tableBoardLabels = {
			empty: {
				title: 'No se encontraron productos',
				subtitle: 'Añada un producto para comenzar.'
			},
			info: {
				title: 'No has seleccionado ningún producto',
				subtitle:
					'Selecciona uno de los productos existentes o añade uno nuevo.'
			},
			button: 'Añadir Producto',
			inputSearchPlaceholder: 'Buscar Producto'
		};
		return (
			<Paper className={classes.paper}>
				<TableBoard
					data={data}
					onClick={this.handleSelectItem}
					selectedItem={selectedItem}
					isLoading={isLoading}
					labels={tableBoardLabels}
					icon={Package}
				>
					{selectedItem && selectedItem.length > 0 && (
						<div className={classes.root}>
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
								{selectedTab === 1 && <div>{selectedItem.presentations}</div>}
								{selectedTab === 2 && <div>Item Three</div>}
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
			</Paper>
		);
	}
}

ProductList.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	data: PropTypes.array
};

ProductList.defaultProps = {
	isLoading: false,
	data: null
};

export default withStyles(styles, { withTheme: true })(ProductList);
