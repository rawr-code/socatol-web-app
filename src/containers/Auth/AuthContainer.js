import { Login } from "Routes";
import { connect } from "react-redux";

// Actions
import { loggedIn } from "../../actions/Auth/AuthActions";

const mapDispatchToProps = dispatch => {
  return {
    loggedIn() {
      dispatch(loggedIn());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
