import Login from "./Login";
import { connect } from "react-redux";

// Actions
import { loggedIn } from "../../../ducks/Auth";
const mapDispatchToProps = dispatch => {
  return {
    loggedIn: login => dispatch(loggedIn())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
