import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = ({ Auth }) => ({ loggedIn: Auth.loggedIn });

export default connect(mapStateToProps)(PrivateRoute);
