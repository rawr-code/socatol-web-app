import React, { PureComponent } from 'react';
import styles from './styles';
import { Field, reduxForm } from 'redux-form';

import {
	FieldMaterialUI,
	FieldMaterialUISelect
} from '../../utils/FieldsMaterialUI';

// Material UI
import {
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	MenuItem,
	withStyles
} from '@material-ui/core';
import { renderComponent } from 'recompose';

class NewBankAccount extends PureComponent {
	componentDidMount() {
		this.handleInitialize();
	}

	handleInitialize() {
		const { info, initialize } = this.props;
		if (info) {
			initialize(info);
		}
	}
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
		return (
			<div>
				<DialogTitle id="form-dialog-title">{title}</DialogTitle>
				<form autoComplete="off" onSubmit={handleSubmit}>
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
						/>
						<Field
							className={classes.field}
							component={FieldMaterialUI}
							id="inputBankName"
							name="bank"
							label="Nombre del banco"
							margin="dense"
							fullWidth
							type="text"
						/>
						<Field
							className={classes.field}
							component={FieldMaterialUI}
							id="inputAccountNumber"
							name="number"
							label="Número de cuenta"
							margin="dense"
							fullWidth
							type="number"
						/>
						<Field
							className={classes.field}
							name="type"
							component={FieldMaterialUISelect}
							label="Tipo de cuenta"
						>
							<MenuItem value="ahorro">Ahorro</MenuItem>
							<MenuItem value="corriente">Corriente</MenuItem>
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

export default reduxForm({ form: 'newBankAccount' })(
	withStyles(styles)(NewBankAccount)
);
