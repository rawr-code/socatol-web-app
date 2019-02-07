import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Bank from './Bank';
import Conciliate from './Conciliate';

// Actions
import { headerTabs, renameHeader } from '../../actions/Layout';

class TreasuryContainer extends Component {
	handleChangeTab = (e, selectedTab) => {
		this.setState({ selectedTab });
	};

	componentDidMount = () => {
		const { headerTabs, changeTitle } = this.props.actions;
		changeTitle('Tesoreria');
		headerTabs([{ name: 'Cuentas Bancarias' }, { name: 'Conciliar Cuentas' }]);
	};

	componentWillUnmount = () => {
		const { headerTabs } = this.props.actions;
		headerTabs(null);
	};

	render() {
		const { state } = this.props;
		const { headerTabSelected } = state;

		return (
			<div style={{ marginTop: 48 }}>
				{headerTabSelected === 0 && <Bank />}
				{headerTabSelected === 1 && <Conciliate />}
			</div>
		);
	}
}

const mapStateToProps = ({ Layout }) => ({
	state: {
		...Layout
	}
});

const mapDispatchToProps = dispatch => ({
	actions: {
		headerTabs: value => {
			return dispatch(headerTabs(value));
		},
		changeTitle: title => dispatch(renameHeader(title))
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TreasuryContainer);
