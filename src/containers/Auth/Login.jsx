import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { Login } from '../../components';
import { LoggedIn } from '../../actions/Auth';

class LoginContainer extends Component {
  render() {
    console.log(this.props);
    return <Login onSubmit={this.props.handleSubmit} />;
  }
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: payload => dispatch(LoggedIn(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginContainer);
