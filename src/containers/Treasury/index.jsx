import React, { Component } from 'react';

// Material UI

import { AccountBalanceOutlined } from '@material-ui/icons';

// Components
import TableBoard from '../../components/TableBoard';

class TreasuryContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedTab: 0
		};
	}

	handleChangeTab = (e, selectedTab) => {
		this.setState({ selectedTab });
	};

	render() {
		const { selectedTab } = this.state;
		const tableBoardBankLabels = {
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
		const tableBoardConciliateLabels = {
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
			<div style={{ marginTop: 48 }}>
				{selectedTab === 0 && (
					<TableBoard
						// data={data}
						onClick={this.handleSelectItem}
						selectedItem={null}
						labels={tableBoardBankLabels}
						icon={AccountBalanceOutlined}
					/>
				)}
				{selectedTab === 1 && (
					<TableBoard
						onClick={this.handleSelectItem}
						selectedItem={null}
						isLoading={true}
						labels={tableBoardConciliateLabels}
						icon={AccountBalanceOutlined}
					/>
				)}
			</div>
		);
	}
}

export default TreasuryContainer;
