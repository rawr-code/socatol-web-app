import React from 'react';

// Material UI
import { ListItem, ListItemText, Avatar } from '@material-ui/core';

const ListItems = props => {
	const { classes, data, onClick, icon: Icon } = props;
	return data.map(item => {
		const { _id, name } = item;
		return (
			<ListItem
				key={_id}
				onClick={() => onClick(item)}
				className={classes.listItem}
			>
				<Avatar className={classes.avatar}>
					<Icon />
				</Avatar>
				<ListItemText
					primary={name}
					secondary="Tipo: Biologico"
					classes={{ root: classes.listItemText }}
				/>
			</ListItem>
		);
	});
};

export default ListItems;
