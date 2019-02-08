import React, { Component } from 'react';
import XLSX from 'xlsx';

// Material UI
import { Button, Typography, Tabs, Tab } from '@material-ui/core';

import { FileText } from 'react-feather';
// Components
import TableBoard from '../../components/TableBoard';

class BankContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: null,
			selectedTab: 0
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleFile = this.handleFile.bind(this);
	}
	handleChange(e) {
		const files = e.target.files;
		this.handleFile(files[0]);
	}

	handleChangeTab = (event, selectedTab) => {
		this.setState({ selectedTab });
	};

	handleFile(file) {
		const reader = new FileReader();
		const rABS = !!reader.readAsBinaryString;
		reader.onload = e => {
			const bstr = e.target.result;
			const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });
			const wsname = wb.SheetNames[0];
			const ws = wb.Sheets[wsname];
			const data = XLSX.utils.sheet_to_json(ws, { header: 2 });
			console.log(data);
			this.setState({ data });
		};
		if (rABS) reader.readAsBinaryString(file);
		else reader.readAsArrayBuffer(file);
	}
	render() {
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
		const tableBoardDataNames = {
			primary: 'Descripción',
			secondary: 'Referencia'
		};
		return (
			<div>
				{/* <Typography>Emmanuel Villegas - 0102-0000-0000-0000-0000</Typography> */}
				<Tabs
					value={this.state.selectedTab}
					indicatorColor="primary"
					textColor="primary"
					onChange={this.handleChangeTab}
				>
					<Tab label="Cuentas Bancarias" disableRipple />
					<Tab label="Conciliar" disableRipple />
				</Tabs>

				<TableBoard
					data={this.state.data}
					isLoading={false}
					icon={FileText}
					labels={tableBoardLabels}
					selectedItem={null}
					onClick={e => console.log(e)}
					dataNames={tableBoardDataNames}
					secondButton={{ title: 'Importar', onClick: e => console.log(e) }}
				/>
			</div>
		);
	}
}

export default BankContainer;
