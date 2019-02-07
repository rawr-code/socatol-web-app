import React from 'react';

// Material UI
import { Typography } from '@material-ui/core';

const AsideInfo = props => {
	const { classes, labels } = props;
	return (
		<section className={classes.infoContainer}>
			<Typography variant="h6" component="h2" className={classes.infoTitle}>
				{labels.title}
			</Typography>
			<Typography
				variant="body2"
				component="p"
				className={classes.infoSubtitle}
			>
				{labels.subtitle}
			</Typography>
		</section>
	);
};

export default AsideInfo;
