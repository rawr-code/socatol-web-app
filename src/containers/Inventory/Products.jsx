import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

// Actions
import { GET_ALL, NEW } from '../../actions/Product';

// Icons
import { Package } from 'react-feather';

// Components
import TableBoard from '../../components/TableBoard';

class Products extends PureComponent {
	componentDidMount = async () => {
		const { getAll } = this.props.actions;

		await getAll();
	};

	render() {
		const { state } = this.props;
		const dataConfig = { primary: 'name', secondary: 'description' };
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
				subtitle:
					'Seleccione uno de los productos existentes o añade uno nuevo.'
			}
		};

		return (
			<div>
				<TableBoard
					icon={Package}
					labels={tableBoardLabels}
					listItemConfig={dataConfig}
					data={state.products}
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ Inventory: { Product } }) => ({
	state: {
		...Product
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
)(Products);
