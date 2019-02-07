import React from 'react';

// Material UI
import { Typography } from '@material-ui/core';

const ListEmpty = props => {
	const { classes, icon: Icon, labels } = props;
	return (
		<div className={classes.infoContainer}>
			{Icon && <Icon size={56} className={classes.infoEmptyIcon} />}
			<Typography variant="h6" component="h2" className={classes.infoEmpty}>
				{labels.title}
			</Typography>
			<Typography
				variant="body2"
				component="p"
				className={classes.infoSubtitle}
			>
				{labels.subtitle}
			</Typography>
		</div>
	);
};

export default ListEmpty;
