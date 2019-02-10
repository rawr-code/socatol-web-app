import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

// Material UI
import {
	Typography,
	Card,
	CardContent,
	Avatar,
	IconButton,
	Grid,
	Button
} from '@material-ui/core';

// Actions
import { GET_ALL, NEW } from '../../actions/Warehouse';

// Icons
import { Home, MoreVertical, Plus } from 'react-feather';

// Components

class Warehouses extends PureComponent {
	componentDidMount = async () => {
		const { getAll } = this.props.actions;

		await getAll();
	};

	render() {
		// const { state } = this.props;

		return (
			<div>
				<header
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						marginBottom: 16
					}}
				>
					<Button variant="contained" color="primary">
						Agregar Almacen
					</Button>
					{/*  */}
				</header>
				<Grid container spacing={24} justify="center">
					<Grid item xs={3}>
						<Card style={{ maxWidth: 300 }}>
							<header
								style={{
									display: 'flex',
									justifyContent: 'center',
									position: 'relative'
								}}
							>
								<Avatar
									style={{
										width: 72,
										height: 72,
										marginTop: 16,
										backgroundColor: '#1890ff'
									}}
								>
									<Home size={40} />
								</Avatar>
								<IconButton
									style={{ position: 'absolute', top: 0, right: 0, margin: 8 }}
								>
									<MoreVertical />
								</IconButton>
							</header>
							<CardContent style={{ textAlign: 'center' }}>
								<Typography component="h2" variant="h6">
									Almacen de repuestos
								</Typography>
								<Typography
									component="span"
									variant="subtitle1"
									color="textSecondary"
								>
									500 productos
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = ({ Inventory: { Warehouse } }) => ({
	state: {
		...Warehouse
	}
});

const mapDispatchToProps = dispatch => ({
	actions: {
		resetForm: name => dispatch(reset(name)),
		getAll: () => dispatch(GET_ALL),
		new: payload => dispatch(NEW(payload))
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Warehouses);
