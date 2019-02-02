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
				<div className={classes.loadingContainer}>
					<div className={classes.infoEmptyContainer}>
						{Icon && <Icon size={36} />}
						<Package size={56} className={classes.infoEmptyIcon} />
						<Typography
							variant="h6"
							component="h2"
							className={classes.infoEmpty}
						>
							No se encontraron datos
						</Typography>
						<Typography
							variant="body2"
							component="p"
							className={classes.infoSubtitle}
						>
							Añada un producto para comenzar.
						</Typography>
					</div>
				</div>
			);
		return (
			<div className={classes.root}>
				<section className={classes.sideListRoot}>
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
				</section>
				{selectedItem ? (
					children
				) : (
					<section className={classes.infoContainer}>
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
					</section>
				)}
			</div>
		);
	}
}

export default withStyles(styles)(TableBoard);
