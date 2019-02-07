import React from 'react';
import { Switch } from 'react-router-dom';

// Material UI Custom Theme
import MUICustomTheme from './MUICustomTheme';

// Components
import { PublicRoute, PrivateRoute } from './components';

// Containers
import { Login } from './containers/Auth';
import Layout from './containers/Layout';
import Products from './containers/Products';
import Invoicing from './containers/Invoicing';
import Treasury from './containers/Treasury';

const Home = () => <div>Home</div>;

const App = props => {
	return (
		<MUICustomTheme>
			<Switch>
				<PublicRoute path="/login" component={Login} />
				<PrivateRoute exact path="/" component={Home} layout={Layout} />
				<PrivateRoute path="/productos" component={Products} layout={Layout} />
				<PrivateRoute path="/tesoreria" component={Treasury} layout={Layout} />
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
