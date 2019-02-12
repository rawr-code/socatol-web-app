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
		reader.onload = evt => {
			const bstr = evt.target.result;
			const wb = XLSX.read(bstr, { type: 'binary' });
			const wsname = wb.SheetNames[0];
			let ws = wb.Sheets[wsname];
			const prueba = {};
			Object.keys(ws).forEach(key => {
				let item = ws[key];
				if (key === '!ref') {
					prueba[key] = item;
				} else {
					if (item.w) {
						item.v = item.w;
					}
					const nuevo = { t: item.t, v: item.v };
					prueba[key] = nuevo;
				}
			});
			let data = XLSX.utils.sheet_to_json(prueba);
			const config = {
				date: 'Fecha',
				ref: 'Referencia',
				description: 'Descripción',
				credit: 'Crédito',
				debit: 'Débito'
			};
			data =
				data.length > 0 &&
				data.map(item => {
					// Momment JS
					// var dateString = '7-1-2016';
					// var momentObj = moment(dateString, 'MM-DD-YYYY');
					// var momentString = momentObj.format('DD-MM-YYYY'); // 15-07-2016
					const credit = Number(item[config.credit]);
					const debit = Number(item[config.debit]);
					const dat = {
						date: item[config.date],
						ref: item[config.ref].toString(),
						description: item[config.description],
						ammount: credit > 0 ? credit : debit * -1
					};
					return dat;
				});
			console.table(data);
			this.setState({ data });
		};
		reader.readAsBinaryString(file);
		// const reader = new FileReader();
		// const rABS = !!reader.readAsBinaryString;
		// reader.onload = () => {
		// 	const fileData = reader.result;
		// 	const workbook = XLSX.read(fileData, { type: rABS ? 'binary' : 'array' });
		// 	const wsname = workbook.SheetNames[0];
		// 	const ws = workbook.Sheets[wsname];
		// 	const data = XLSX.utils.sheet_to_json(ws, { raw: true, header: 0 });
		// 	console.log(XLSX.utils.sheet_to_json(ws, { header: 0 }));
		// 	// console.log(Object.keys(data[0]));
		// };
		// if (rABS) reader.readAsBinaryString(file);
		// else reader.readAsArrayBuffer(file);
		// // const rABS = !!reader.readAsBinaryString;
		// // reader.onload = e => {
		// // 	const bstr = e.target.result;
		// // 	const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });
		// // 	const wsname = wb.SheetNames[0];
		// // 	const ws = wb.Sheets[wsname];
		// // 	const data = XLSX.utils.sheet_to_json(ws, { cellDates: true });
		// // 	console.log(data);
		// // 	this.setState({ data });
		// // };
		// // if (rABS) reader.readAsBinaryString(file);
		// // else reader.readAsArrayBuffer(file);
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
