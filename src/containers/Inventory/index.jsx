import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

// Actions
import { setTabs, setHeaderTitle } from '../../actions/Layout';

// Components
import Products from './Products';

class InventoryContainer extends PureComponent {
	componentDidMount = () => {
		const { setHeaderTitle } = this.props.actions;
		setHeaderTitle('Productos');
	};

	render() {
		return <Products />;
	}
}

const mapDispatchToProps = dispatch => ({
	actions: {
		resetForm: name => dispatch(reset(name)),
		setHeaderTitle: title => dispatch(setHeaderTitle(title))
	}
});

export default connect(
	null,
	mapDispatchToProps
)(InventoryContainer);
