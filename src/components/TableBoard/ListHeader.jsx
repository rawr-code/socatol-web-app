import React from 'react';

// Material UI
import { TextField } from '@material-ui/core';

const ListHeader = props => {
	const { classes, labels } = props;
	return (
		<div className={classes.searchBox}>
			<TextField
				id="inputSearch"
				className={classes.searchBoxTextField}
				margin="normal"
				placeholder={labels.inputSearchPlaceholder}
			/>
		</div>
	);
};

export default ListHeader;
