import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { setTabs, setHeaderTitle } from '../../actions/Layout';

// Components
import BankAccounts from './BankAccounts';
import Conciliate from './Conciliate';
import NewBankAccount from './NewBankAccount';

class TreasuryContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalOpen: false,
			modalType: null
		};

		this.handleClickOpenModal = this.handleClickOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	componentDidMount = () => {
		const { actions } = this.props;
		const { setHeaderTitle, setHeaderTabs } = actions.layout;
		setHeaderTitle('Tesoreria');
		setHeaderTabs([{ name: 'Cuentas Bancarias' }, { name: 'Conciliar' }]);
	};

	componentWillUnmount = () => {
		const { actions } = this.props;
		const { setHeaderTabs } = actions.layout;
		setHeaderTabs(null);
	};

	handleClickOpenModal = () => {
		this.setState({ modalOpen: true });
		// this.props.actions.getAllWarehouse();
		// this.props.actions.resetForm('newProduct');
	};

	handleCloseModal = () => {
		this.setState({ modalOpen: false });
	};
	render() {
		const { state } = this.props;
		const { tabSelected } = state.layout;

		return (
			<div style={{ marginTop: 48 }}>
				{tabSelected === 0 && (
					<BankAccounts openModal={this.handleClickOpenModal} />
				)}
				{tabSelected === 1 && <Conciliate />}
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
