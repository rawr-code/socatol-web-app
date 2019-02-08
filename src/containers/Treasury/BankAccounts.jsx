import React from 'react';

// Material UI
import { AccountBalanceOutlined } from '@material-ui/icons';

// Components
import TableBoard from '../../components/TableBoard';

const BankAccounts = props => {
	const tableBoardLabels = {
		listHeader: {
			inputSearchPlaceholder: 'Buscar Cuenta'
		},
		listEmpty: {
			title: 'No se encontraron cuentas',
			subtitle: 'Añada un cuenta para comenzar.'
		},
		listButtons: {
			button: 'Añadir Cuenta'
		},
		asideInfo: {
			title: 'No has seleccionado ninguna cuenta',
			subtitle: 'Seleccione una de las cuentas existentes o añada una nueva.'
		}
	};
	return (
		<TableBoard
			// data={data}
			// onClick={props.handleSelectItem}
			selectedItem={null}
			labels={tableBoardLabels}
			icon={AccountBalanceOutlined}
		/>
	);
};

export default BankAccounts;
