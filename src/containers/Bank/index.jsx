import React, { Component } from 'react';

// Material UI
import { Button, Typography } from '@material-ui/core';

import { FileText } from 'react-feather';
// Components
import TableBoard from '../../components/TableBoard';

class BankContainer extends Component {
	render() {
		const tableBoardLabels = {
			empty: {
				title: 'No se encontraron datos',
				subtitle: 'Añada un movimiento para comenzar.'
			},
			info: {
				title: 'No has seleccionado ningún movimiento',
				subtitle:
					'Seleccione uno de los movimientos existentes o añada uno nuevo.'
			},
			button: 'Añadir Movimiento',
			inputSearchPlaceholder: 'Buscar Movimiento'
		};
		return (
			<div>
				<header
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						marginBottom: 24
					}}
				>
					<Button>
						<Typography>
							Emmanuel Villegas - 0102-0000-0000-0000-0000
						</Typography>
					</Button>
					<Button variant="contained" color="primary">
						Gestionar cuentas
					</Button>
				</header>
				<TableBoard
					isLoading={false}
					icon={FileText}
					labels={tableBoardLabels}
					selectedItem={null}
				/>
			</div>
		);
	}
}

export default BankContainer;
