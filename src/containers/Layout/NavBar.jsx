import React from 'react';

// Material UI
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

// Icons
import { Menu } from 'react-feather';

// Components
import HeaderTabs from '../../components/HeaderTabs';

const NavBar = props => {
	const { classes, title, tabs, tabSelected, changeTab, navOpen } = props;
	return (
		<AppBar position="fixed" className={classes.appBar} color="primary">
			{/* Toolbar */}
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="Open drawer"
					onClick={() => navOpen()}
					className={classes.menuButton}
				>
					<Menu />
				</IconButton>
				<Typography variant="h6" color="inherit" noWrap component="h1">
					{title ? title : 'Title'}
				</Typography>
			</Toolbar>
			{/* HeaderTabs */}
			{tabs && (
				<HeaderTabs value={tabSelected} onChange={changeTab} options={tabs} />
			)}
		</AppBar>
	);
};

export default NavBar;
