import React, { Component } from 'react';

// Components
import Bank from './Bank';
import Conciliate from './Conciliate';

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

		return (
			<div style={{ marginTop: 48 }}>
				{selectedTab === 0 && <Bank />}
				{selectedTab === 1 && <Conciliate />}
			</div>
		);
	}
}

export default TreasuryContainer;
