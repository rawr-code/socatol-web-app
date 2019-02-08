import React from 'react';

// Material UI
import { ListItem, ListItemText, Avatar } from '@material-ui/core';

const ListItems = props => {
	const { classes, data, onClick, icon: Icon, config } = props;

	return data.map(item => (
		<ListItem
			key={item._id}
			onClick={() => onClick(item)}
			className={classes.listItem}
		>
			{Icon && (
				<Avatar className={classes.avatar}>
					<Icon />
				</Avatar>
			)}
			<ListItemText
				primary={item[config.primary]}
				secondary={item[config.secondary]}
				classes={{ root: classes.listItemText }}
			/>
		</ListItem>
	));
};

export default ListItems;
