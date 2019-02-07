import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { Button } from '@material-ui/core';

const ListButtons = props => {
	const { classes, labels } = props;
	return (
		<div className={classes.buttonsContainer}>
			<Button variant="text" color="primary" className={classes.button}>
				{labels.button}
			</Button>
			{/* {secondButton && (
				<Button
					variant="text"
					color="primary"
					className={classes.button}
					onClick={secondButton.onClick}
				>
					{secondButton.title}
				</Button>
			)} */}
		</div>
	);
};

export default ListButtons;
