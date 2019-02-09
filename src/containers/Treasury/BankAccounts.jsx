import React, { Fragment } from 'react';

// Material UI
import {
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Button,
	IconButton
} from '@material-ui/core';

// Icons
import { ChevronDown } from 'react-feather';

const BankAccounts = props => {
	return (
		<Fragment>
			<header
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
					marginBottom: 16
				}}
			>
				<Button variant="contained" color="primary">
					Agregar cuenta
				</Button>
			</header>
			<Paper>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Nombre</TableCell>
							<TableCell>Banco</TableCell>
							<TableCell>Número de cuenta</TableCell>
							<TableCell>Tipo</TableCell>
							<TableCell align="right" style={{ paddingRight: 0 }}>
								Balance
							</TableCell>
							<TableCell />
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell component="th" scope="row">
								Cuenta principal
							</TableCell>
							<TableCell>Banco de venezuela</TableCell>
							<TableCell>0102-0000-00000-00000000</TableCell>
							<TableCell>Corriente</TableCell>
							<TableCell align="right" style={{ paddingRight: 0 }}>
								12.785,00 Bs S
							</TableCell>
							<TableCell style={{ width: 1, padding: '0 16px' }}>
								<IconButton>
									<ChevronDown size={15} />
								</IconButton>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Paper>
		</Fragment>
	);
};

export default BankAccounts;
