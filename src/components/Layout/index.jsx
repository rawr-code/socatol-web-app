import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './styles';

// Material UI Components
import {
	Hidden,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListSubheader,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	withStyles
} from '@material-ui/core';

import { Menu } from '@material-ui/icons';
import { Package, DollarSign, Printer, Grid, FileText } from 'react-feather';

// Components
import HeaderTabs from '../HeaderTabs';

// Actions
import { selectHeaderTab } from '../../actions/Layout';

class Layout extends React.Component {
	state = {
		mobileOpen: false,
		selectedItem: 0
	};

	handleDrawerToggle = () => {
		const { mobileOpen } = this.state;
		this.setState({ mobileOpen: !mobileOpen });
	};

	handleListItemClick = selectedItem => {
		this.setState({ selectedItem });
	};

	render() {
		const { classes, children, state, actions } = this.props;
		const { headerTitle, headerTabs, headerTabSelected } = state;
		const { changeTab } = actions;
		const navigation = [
			{
				label: 'Inicio',
				to: '/',
				icon: <Grid />
			},
			{
				label: 'Facturación',
				to: '/facturacion',
				icon: <FileText />
			},
			{
				label: 'Tesoreria',
				to: '/tesoreria',
				icon: <DollarSign />
			},
			{
				label: 'Productos',
				to: '/productos',
				icon: <Package />
			},
			{
				label: 'Reportes',
				// to: '/reportes'
				to: '/',
				icon: <Printer />
			}
		];
		const drawer = (
			<div>
				<div className={classes.toolbar} />
				<List
					className={classes.list}
					component="nav"
					subheader={<ListSubheader component="span">Menu</ListSubheader>}
				>
					{navigation.map((item, index) => (
						<NavLink to={item.to} className={classes.navLink} key={item.label}>
							<ListItem
								className={classes.listItem}
								classes={{ selected: classes.listItemActive }}
								component="div"
								selected={this.state.selectedItem === index}
								onClick={() => this.handleListItemClick(index)}
							>
								<ListItemIcon className={classes.listItemIcon}>
									{item.icon}
								</ListItemIcon>

								<ListItemText
									primary={item.label}
									className={classes.navLinkText}
									classes={{
										primary:
											this.state.selectedItem === index
												? classes.listItemIcon
												: classes.listItemPrimary
									}}
								/>
							</ListItem>
						</NavLink>
					))}
				</List>
			</div>
		);
		return (
			<div className={classes.root}>
				<AppBar position="fixed" className={classes.appBar} color="primary">
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={() => this.handleDrawerToggle()}
							className={classes.menuButton}
						>
							<Menu />
						</IconButton>
						<Typography variant="h6" color="inherit" noWrap>
							{headerTitle ? headerTitle : 'Title'}
						</Typography>
					</Toolbar>
					{headerTabs && (
						<HeaderTabs
							value={headerTabSelected}
							onChange={changeTab}
							options={headerTabs}
						/>
					)}
				</AppBar>
				<nav className={classes.drawer}>
					<Hidden smUp implementation="css">
						<Drawer
							container={this.props.container}
							variant="temporary"
							open={this.state.mobileOpen}
							onClose={this.handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden xsDown implementation="css">
						<Drawer
							classes={{
								paper: classes.drawerPaper
							}}
							variant="permanent"
							open
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
				<main className={classes.content}>
					{/* <div className={classes.toolbar} /> */}
					{children}
				</main>
			</div>
		);
	}
}

const mapStateToProps = ({ Layout }) => ({
	state: { ...Layout }
});

const mapDispatchToProps = dispatch => ({
	actions: {
		changeTab: (e, value) => {
			return dispatch(selectHeaderTab(value));
		}
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(Layout));
