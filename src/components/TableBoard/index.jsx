import React, { PureComponent } from 'react';

// MaterialUI
import {
	Button,
	Avatar,
	List,
	ListItem,
	ListItemText,
	Typography,
	TextField,
	CircularProgress,
	withStyles
} from '@material-ui/core';
import { Package } from 'react-feather';

import styles from './styles';

class TableBoard extends PureComponent {
	render() {
		const {
			classes,
			data,
			onClick,
			icon: Icon,
			selectedItem,
			isLoading,
			children
		} = this.props;
		const listItems =
			data && data.length > 0 ? (
				data.map(item => {
					const { _id, name } = item;
					return (
						<ListItem
							key={_id}
							onClick={() => onClick(item)}
							className={classes.listItem}
						>
							<Avatar className={classes.avatar}>
								<Package />
							</Avatar>
							<ListItemText
								primary={name}
								secondary="Tipo: Biologico"
								classes={{ root: classes.listItemText }}
							/>
						</ListItem>
					);
				})
			) : (
				<Typography variant="body1" component="li">
					No hay registros.
				</Typography>
			);
		return (
			<div className={classes.root}>
				<div className={classes.sideListRoot}>
					<div className={classes.searchBox}>
						<TextField
							id="standard-name"
							className={classes.searchBoxTextField}
							margin="normal"
							placeholder="Buscar Producto"
						/>
					</div>
					<List className={classes.list} disablePadding>
						{isLoading ? (
							<div className={classes.loadingContainer}>
								<div className={classes.loadingIconContainer}>
									<CircularProgress size={72} />
									{Icon ? (
										<Icon size={36} className={classes.loadingIcon} />
									) : (
										<Package size={36} className={classes.loadingIcon} />
									)}
								</div>
							</div>
						) : (
							listItems
						)}
					</List>
					<Button
						variant="contained"
						color="primary"
						className={classes.addBotton}
					>
						Añadir Producto
					</Button>
				</div>
				{selectedItem ? (
					children
				) : (
					<div className={classes.infoContainer}>
						<Typography
							variant="h6"
							component="h2"
							className={classes.infoTitle}
						>
							No tienes ningún producto seleccionado
						</Typography>
						<Typography
							variant="body2"
							component="p"
							className={classes.infoSubtitle}
						>
							Elije uno de tus productos existentes o añade uno nuevo.
						</Typography>
					</div>
				)}
			</div>
		);
	}
}

export default withStyles(styles)(TableBoard);
