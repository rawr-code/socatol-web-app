import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material UI
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Paper,
	Button,
	IconButton
} from '@material-ui/core';

// Actions
import { setTabs, setHeaderTitle } from '../../actions/Layout';

// Icons
import { ChevronDown } from 'react-feather';
// Components
import BankAccounts from './BankAccounts';
import Conciliate from './Conciliate';

let id = 0;
function createData(name, calories, fat, carbs, protein) {
	id += 1;
	return { id, name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9)
];

class TreasuryContainer extends Component {
	componentDidMount = () => {
		const { actions } = this.props;
		const { setHeaderTitle, setHeaderTabs } = actions.layout;
		setHeaderTitle('Tesoreria');
		setHeaderTabs([
			{ name: 'Cuentas Bancarias' },
			{ name: 'Conciliar Cuentas' }
		]);
	};

	componentWillUnmount = () => {
		const { actions } = this.props;
		const { setHeaderTabs } = actions.layout;
		setHeaderTabs(null);
	};

	render() {
		const { state } = this.props;
		const { tabSelected } = state.layout;

		return (
			<div style={{ marginTop: 48 }}>
				<header
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						marginBottom: 16
					}}
				>
					<Button variant="contained" color="primary">
						Agregar cuenta
					</Button>
				</header>
				<Paper>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Nombre</TableCell>
								<TableCell>Banco</TableCell>
								<TableCell>Número de cuenta</TableCell>
								<TableCell>Tipo</TableCell>
								<TableCell align="right" style={{ paddingRight: 0 }}>
									Balance
								</TableCell>
								<TableCell />
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell component="th" scope="row">
									Cuenta principal
								</TableCell>
								<TableCell>Banco de venezuela</TableCell>
								<TableCell>0102-0000-00000-00000000</TableCell>
								<TableCell>Corriente</TableCell>
								<TableCell align="right" style={{ paddingRight: 0 }}>
									12.785,00 Bs S
								</TableCell>
								<TableCell style={{ width: 1, padding: '0 16px' }}>
									<IconButton>
										<ChevronDown size={15} />
									</IconButton>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Paper>
				{/* {tabSelected === 0 && <BankAccounts />}
				{tabSelected === 1 && <Conciliate />} */}
			</div>
		);
	}
}

const mapStateToProps = ({ Layout }) => ({
	state: {
		layout: Layout
	}
});

const mapDispatchToProps = dispatch => ({
	actions: {
		layout: {
			setHeaderTabs: value => dispatch(setTabs(value)),
			setHeaderTitle: title => dispatch(setHeaderTitle(title))
		}
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TreasuryContainer);
