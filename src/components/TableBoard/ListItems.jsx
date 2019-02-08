import React from 'react';

// Material UI
import { ListItem, ListItemText, Avatar, Typography } from '@material-ui/core';

const ListItems = props => {
	const { classes, data, onClick, icon: Icon, config, bank } = props;

	return data.map((item, index) => {
		return !bank ? (
			<ListItem
				key={index}
				onClick={() => onClick(item)}
				className={classes.listItem}
			>
				{!bank && Icon && (
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
		) : (
			typeof item.Fecha === 'string' && (
				<ListItem
					key={index}
					onClick={() => onClick(item)}
					className={classes.listItem}
				>
					<div key={index}>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								width: '100%'
							}}
						>
							<Typography>{item.Fecha}</Typography>

							{item.Crédito > 0 ? (
								<Typography
									style={{
										fontSize: 14,
										position: 'absolute',
										right: 12,
										fontWeight: 500,
										color: 'green'
									}}
								>
									+{item.Crédito} Bs
								</Typography>
							) : (
								<Typography
									style={{
										fontSize: 14,
										position: 'absolute',
										right: 12,
										fontWeight: 500,
										color: 'red'
									}}
								>
									-{item.Débito} Bs
								</Typography>
							)}
						</div>
						<ListItemText
							primary={item.Descripción}
							secondary={item.Referencia}
							classes={{
								root: classes.listItemText
							}}
						/>
					</div>
				</ListItem>
			)
		);
	});
};

export default ListItems;
