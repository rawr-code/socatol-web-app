import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { setTabs, setHeaderTitle } from '../../actions/Layout';

// Components
import BankAccounts from './BankAccounts';
import Conciliate from './Conciliate';

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
				{tabSelected === 0 && <BankAccounts />}
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
