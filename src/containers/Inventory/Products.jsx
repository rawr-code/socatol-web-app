import React from 'react';

// Icons
import { Package } from 'react-feather';

// Components
import TableBoard from '../../components/TableBoard';

const tableBoardLabels = {
	listHeader: {
		inputSearchPlaceholder: 'Buscar Producto'
	},
	listEmpty: {
		title: 'No se encontraron productos',
		subtitle: 'Añada un producto para comenzar.'
	},
	listButtons: {
		button: 'Añadir Producto'
	},
	asideInfo: {
		title: 'No has seleccionado ningún producto',
		subtitle: 'Seleccione uno de los productos existentes o añade uno nuevo.'
	}
};
const Products = props => {
	return (
		<div>
			<TableBoard icon={Package} labels={tableBoardLabels} />
		</div>
	);
};

export default Products;
