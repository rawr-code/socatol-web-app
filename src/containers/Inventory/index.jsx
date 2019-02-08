import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import SwipeableViews from 'react-swipeable-views';

// Actions
import { setTabs, setHeaderTitle } from '../../actions/Layout';

// Components
import Warehouses from './Warehouses';
import Products from './Products';

class InventoryContainer extends PureComponent {
	componentDidMount = async () => {
		const { setHeaderTitle, setHeaderTabs } = this.props.actions;
		setHeaderTitle('Inventario');
		setHeaderTabs([{ name: 'Almacenes' }, { name: 'Productos' }]);
	};

	componentWillUnmount = () => {
		const { actions } = this.props;
		const { setHeaderTabs } = actions.layout;
		setHeaderTabs(null);
	};

	render() {
		const { state } = this.props;

		return (
			<div style={{ marginTop: 48 }}>
				<SwipeableViews index={state.tabSelected}>
					<Warehouses />
					<Products />
				</SwipeableViews>
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
		resetForm: name => dispatch(reset(name)),
		setHeaderTabs: value => dispatch(setTabs(value)),
		setHeaderTitle: title => dispatch(setHeaderTitle(title))
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InventoryContainer);
