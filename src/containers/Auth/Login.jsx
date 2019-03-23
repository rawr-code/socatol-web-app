import React from 'react';
import { connect } from 'react-redux';

// Components
import { Login } from '../../components';
import { LoggedIn } from '../../store/actions/Auth';

const LoginContainer = ({ handleSubmit }) => <Login onSubmit={handleSubmit} />;

const mapDispatchToProps = dispatch => ({
  handleSubmit: payload => dispatch(LoggedIn(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginContainer);
