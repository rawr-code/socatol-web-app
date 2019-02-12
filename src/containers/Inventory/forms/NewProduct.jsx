import React, { PureComponent } from 'react';
import styles from './styles';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import {
	FieldMaterialUI,
	FieldMaterialUISelect
} from '../../../utils/FieldsMaterialUI';

// Material UI
import {
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	MenuItem,
	withStyles
} from '@material-ui/core';

class NewBankAccount extends PureComponent {
	// changeUser() {
	//   this.props.setDefaultUser(
	//      randomUsers[Math.floor(Math.random()*randomUsers.length)]
	//   )
	// }
	componentDidMount() {
		this.handleInitialize();
	}

	handleInitialize() {
		const { info, initialize } = this.props;
		if (info) {
			const initialData = {
				...info,
				warehouseId: info.warehouse
			};
			console.log(info);
			initialize(initialData);
		}
	}
	// handleSelectChange = (value, type) => {
	// 	if (type === 'site') {
	// 		this.props.change('net', 'newValue');
	// 	}
	// };

	render() {
		const {
			classes,
			title,
			handleClose,
			handleSubmit,
			pristine,
			submitting,
			data
		} = this.props;
		const { warehouses } = data.warehouse;
		return (
			<div>
				<DialogTitle id="form-dialog-title">{title}</DialogTitle>
				<form autoComplete="off" onSubmit={handleSubmit} model="product">
					<DialogContent>
						<Field
							className={classes.field}
							component={FieldMaterialUI}
							id="inputName"
							name="name"
							label="Nombre"
							margin="dense"
							fullWidth
							type="text"
							value="emma"
						/>
						<Field
							className={classes.field}
							component={FieldMaterialUI}
							id="inputStock"
							name="stock"
							label="Stock"
							margin="dense"
							fullWidth
							type="number"
						/>
						<Field
							className={classes.field}
							component={FieldMaterialUI}
							id="inputPrice"
							name="price"
							label="Precio"
							margin="dense"
							fullWidth
							type="number"
						/>
						<Field
							className={classes.field}
							component={FieldMaterialUI}
							id="inputIVA"
							name="iva"
							label="IVA"
							margin="dense"
							fullWidth
							type="number"
						/>
						<Field
							className={classes.field}
							name="warehouseId"
							component={FieldMaterialUISelect}
							label="Almacen"
						>
							{warehouses &&
								warehouses.length > 0 &&
								warehouses.map(item => (
									<MenuItem key={item._id} value={item._id}>
										{item.name}
									</MenuItem>
								))}
						</Field>
					</DialogContent>
					<DialogActions>
						<Button
							onClick={handleClose}
							color="primary"
							style={{ textTransform: 'capitalize' }}
						>
							Cancelar
						</Button>
						<Button
							type="submit"
							color="primary"
							variant="contained"
							style={{ textTransform: 'capitalize' }}
							disabled={pristine || submitting}
						>
							Añadir
						</Button>
					</DialogActions>
				</form>
			</div>
		);
	}
}

const mapStateToProps = ({ Inventory: { Warehouse: warehouse } }) => ({
	data: {
		warehouse
	}
});

const formulario = reduxForm({ form: 'newProduct' })(
	withStyles(styles)(NewBankAccount)
);

export default connect(mapStateToProps)(formulario);
