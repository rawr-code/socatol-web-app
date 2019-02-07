import React from 'react';

// Material UI
import { AccountBalanceOutlined } from '@material-ui/icons';

// Components
import TableBoard from '../../components/TableBoard';

const Bank = props => {
	const tableBoardLabels = {
		empty: {
			title: 'No se encontraron cuentas',
			subtitle: 'Añada un cuenta para comenzar.'
		},
		info: {
			title: 'No has seleccionado ninguna cuenta',
			subtitle: 'Seleccione una de las cuentas existentes o añada una nueva.'
		},
		button: 'Añadir Cuenta',
		inputSearchPlaceholder: 'Buscar Cuenta'
	};
	return (
		<TableBoard
			// data={data}
			onClick={props.handleSelectItem}
			selectedItem={null}
			labels={tableBoardLabels}
			icon={AccountBalanceOutlined}
		/>
	);
};

export default Bank;
