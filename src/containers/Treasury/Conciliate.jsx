import React, { PureComponent } from 'react';
import XLSX from 'xlsx';

// Material UI
import { FileText } from 'react-feather';

// Components
import TableBoard from '../../components/TableBoard';

class Conciliate extends PureComponent {
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
		const { data } = this.state;
		const tableBoardLabels = {
			listHeader: {
				inputSearchPlaceholder: 'Buscar Movimiento'
			},
			listEmpty: {
				title: 'No se encontraron movimientos',
				subtitle: 'Añada un movimiento para comenzar.'
			},
			listButtons: {
				button: 'Añadir Movimiento'
			},
			asideInfo: {
				title: 'No has seleccionado ningún movimiento',
				subtitle:
					'Seleccione uno de los movimientos existentes o añada uno nuevo.'
			}
		};
		return (
			<TableBoard
				data={data}
				bank
				// onClick={props.handleSelectItem}
				selectedItem={null}
				labels={tableBoardLabels}
				icon={FileText}
				listItemClick={e => console.log(e)}
				otherButton={{
					title: 'Importar',
					onClick: e => console.log(e),
					onChange: this.handleChange
				}}
			/>
		);
	}
}

export default Conciliate;
