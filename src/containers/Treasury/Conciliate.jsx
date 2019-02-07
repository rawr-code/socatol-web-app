import React from 'react';

// Material UI
import { FileText } from 'react-feather';

// Components
import TableBoard from '../../components/TableBoard';

const Bank = props => {
	const tableBoardLabels = {
		empty: {
			title: 'No se encontraron movimientos',
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
		<TableBoard
			// data={data}
			onClick={props.handleSelectItem}
			selectedItem={null}
			labels={tableBoardLabels}
			icon={FileText}
		/>
	);
};

export default Bank;
