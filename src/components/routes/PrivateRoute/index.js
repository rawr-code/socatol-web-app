import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";

const mapStateToProps = ({ Auth }) => {
  return { loggedIn: Auth.loggedIn };
};

export default connect(mapStateToProps)(PrivateRoute);
