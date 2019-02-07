import React from 'react';

// Material UI
import { Typography, CircularProgress } from '@material-ui/core';

const Loading = props => {
	const { classes, icon: Icon } = props;
	return (
		<div className={classes.infoContainer}>
			<div className={classes.loadingIconContainer}>
				<CircularProgress size={72} />
				{Icon && <Icon size={36} className={classes.loadingIcon} />}
			</div>
			<Typography
				variant="body2"
				component="span"
				className={classes.infoSubtitle}
			>
				Consultando...
			</Typography>
		</div>
	);
};

export default Loading;
