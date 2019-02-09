import React from 'react';

// Material UI
import { Button } from '@material-ui/core';

const ListButtons = props => {
	const { classes, labels, buttons } = props;
	return (
		<div className={classes.buttonsContainer}>
			<Button variant="text" color="primary" className={classes.button}>
				{labels.button}
			</Button>
			{buttons && (
				<>
					<input
						accept=""
						style={{ display: 'none' }}
						id="text-button-file"
						type="file"
						onChange={buttons.onChange}
					/>
					<label htmlFor="text-button-file" style={{ width: '100%' }}>
						<Button component="span" className={classes.button}>
							{buttons.title}
						</Button>
					</label>
				</>
			)}
		</div>
	);
};

export default ListButtons;
