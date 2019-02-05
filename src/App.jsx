import React from 'react';
import { Switch } from 'react-router-dom';

// Material UI Custom Theme
import MUICustomTheme from './MUICustomTheme';

// Components
import Layout from './components/Layout';

import { PublicRoute, PrivateRoute } from './components';

// Containers
import { Login } from './containers/Auth';
import Products from './containers/Products';
import Bank from './containers/Bank';
import Invoicing from './containers/Invoicing';

const Home = () => <div>Home</div>;

const App = props => {
	return (
		<MUICustomTheme>
			<Switch>
				<PublicRoute path="/login" component={Login} />
				<PrivateRoute exact path="/" component={Home} layout={Layout} />
				<PrivateRoute path="/productos" component={Products} layout={Layout} />
				<PrivateRoute path="/banco" component={Bank} layout={Layout} />
				<PrivateRoute
					path="/facturacion"
					component={Invoicing}
					layout={Layout}
				/>
			</Switch>
		</MUICustomTheme>
	);
};

export default App;
