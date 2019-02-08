import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

// Actions
import { GET_ALL, NEW } from '../../actions/Warehouse';

// Icons
import { Home } from 'react-feather';

// Components
import TableBoard from '../../components/TableBoard';

class Warehouses extends PureComponent {
	componentDidMount = async () => {
		const { getAll } = this.props.actions;

		await getAll();
	};

	render() {
		const { state } = this.props;
		const dataConfig = { primary: 'name', secondary: 'code' };
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
				subtitle:
					'Seleccione uno de los almacenes existentes o añade uno nuevo.'
			}
		};

		return (
			<div>
				<TableBoard
					icon={Home}
					labels={tableBoardLabels}
					isLoading={false}
					listItemConfig={dataConfig}
					data={state.warehouses}
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ Inventory: { Warehouse } }) => ({
	state: {
		...Warehouse
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
)(Warehouses);
