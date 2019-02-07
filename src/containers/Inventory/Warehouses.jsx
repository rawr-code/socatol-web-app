import React from 'react';

// Icons
import { Home } from 'react-feather';

// Components
import TableBoard from '../../components/TableBoard';

const tableBoardLabels = {
	listHeader: {
		inputSearchPlaceholder: 'Buscar Almacen'
	},
	listEmpty: {
		title: 'No se encontraron almacenes',
		subtitle: 'Añada un almacen para comenzar.'
	},
	listButtons: {
		button: 'Añadir Almacen'
	},
	asideInfo: {
		title: 'No has seleccionado ningún almacen',
		subtitle: 'Seleccione uno de los almacenes existentes o añade uno nuevo.'
	}
};

const Warehouses = props => {
	return (
		<div>
			<TableBoard icon={Home} labels={tableBoardLabels} isLoading={false} />
		</div>
	);
};

export default Warehouses;
